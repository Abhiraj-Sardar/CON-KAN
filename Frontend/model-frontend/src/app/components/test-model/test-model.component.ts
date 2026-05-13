import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent {

  selectedFile : File | null       = null;
  previewUrl   : string | null     = null;
  prediction   : string | null     = null;
  confidence   : number | null     = null;
  isLoading    : boolean           = false;
  errorMsg     : string | null     = null;
  isDragging   : boolean           = false;

  private readonly API = 'http://localhost:8000/predict';

  constructor(private http: HttpClient) {}

  /* ── Drag & Drop ── */
  onDragOver(e: DragEvent): void  { e.preventDefault(); this.isDragging = true;  }
  onDragLeave(): void             {                      this.isDragging = false; }

  onDrop(e: DragEvent): void {
    e.preventDefault();
    this.isDragging = false;
    const file = e.dataTransfer?.files[0];
    if (file) this.loadFile(file);
    }

  onFileSelected(e: Event): void {
    const input = e.target as HTMLInputElement;
    if (input.files?.[0]) this.loadFile(input.files[0]);
  }

  private loadFile(file: File): void {
    this.selectedFile = file;
    this.prediction   = null;
    this.confidence   = null;
    this.errorMsg     = null;

    const reader      = new FileReader();
    reader.onload     = () => { this.previewUrl = reader.result as string; };
    reader.readAsDataURL(file);
  }

  clearImage(): void {
    this.selectedFile = null;
    this.previewUrl   = null;
    this.prediction   = null;
    this.confidence   = null;
    this.errorMsg     = null;
  }

  submitImage(): void {
    if (!this.selectedFile) return;

    this.isLoading  = true;
    this.prediction = null;
    this.errorMsg   = null;

    const form = new FormData();
    form.append('file', this.selectedFile);

    this.http.post<{ prediction: string; confidence: number }>(this.API, form)
      .subscribe({
        next: (res) => {
          this.prediction = res.prediction;
          this.confidence = res.confidence ?? null;
          this.isLoading  = false;
        },
        error: () => {
          this.errorMsg  = '⚠️ Could not reach the API. Please ensure the server is running on port 8000.';
          this.isLoading = false;
        }
      });
  }

  get resultEmoji(): string {
    if (!this.prediction) return '';
    return this.prediction.toLowerCase() === 'cat' ? '🐱' : '🐶';
  }

  get resultGradient(): string {
    if (!this.prediction) return '';
    return this.prediction.toLowerCase() === 'cat'
      ? 'linear-gradient(135deg, #ffeef8, #ffd6f0)'
      : 'linear-gradient(135deg, #fff8e8, #ffe5c0)';
  }
}