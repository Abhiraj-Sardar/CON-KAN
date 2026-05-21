import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-test-model',
  templateUrl: './test-model.component.html',
  styleUrls: ['./test-model.component.css']
})
export class TestModelComponent {

  selectedFile : File | null       = null;
  previewUrl   : string | null     = null;
  cnnprediction   : string | null     = null;
  cnnconfidence   : number | null     = null;
  cnnisLoading    : boolean           = false;
  cnnerrorMsg     : string | null     = null;
  conkanprediction   : string | null     = null;
  conkanconfidence   : number | null     = null;
  conkanisLoading    : boolean           = false;
  conkanerrorMsg     : string | null     = null;
  isDragging   : boolean           = false;

  private readonly cnnAPI = 'https://kan-fast-api.onrender.com/api/v1/predict';
  private readonly conkanAPI = 'https://kan-fast-api.onrender.com/api/v4/predict';

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
    this.cnnprediction   = null;
    this.cnnconfidence   = null;
    this.cnnerrorMsg     = null;
    this.conkanprediction   = null;
    this.conkanconfidence   = null;
    this.conkanerrorMsg     = null;

    const reader      = new FileReader();
    reader.onload     = () => { this.previewUrl = reader.result as string; };
    reader.readAsDataURL(file);
  }

  clearImage(): void {
    this.selectedFile = null;
    this.previewUrl   = null;
    this.cnnprediction   = null;
    this.cnnconfidence   = null;
    this.cnnerrorMsg     = null;
    this.conkanprediction   = null;
    this.conkanconfidence   = null;
    this.conkanerrorMsg     = null;
  }

  submitImage(): void {
    if (!this.selectedFile) return;

    this.cnnisLoading  = true;
    this.cnnprediction = null;
    this.cnnerrorMsg   = null;
    this.conkanisLoading  = true;
    this.conkanprediction = null;
    this.conkanerrorMsg   = null;

    const form = new FormData();
    form.append('file', this.selectedFile);

    // this.http.post<{ prediction: string; confidence: number }>(this.API, form)
    //   .subscribe({
    //     next: (res) => {
    //       this.prediction = res.prediction;
    //       this.confidence = res.confidence ?? null;
    //       this.isLoading  = false;
    //     },
    //     error: () => {
    //       this.errorMsg  = '⚠️ Could not reach the API. Please ensure the server is running on port 8000.';
    //       this.isLoading = false;
    //     }
    //   });

    forkJoin({
      cnn: this.http.post<{ prediction: string; probability: number }>(this.cnnAPI, form),
      conkan: this.http.post<{ prediction: string; probability: number }>(this.conkanAPI, form)
    }).subscribe((res)=>{
        this.cnnprediction = res.cnn.prediction;
        this.cnnconfidence = res.cnn.probability;
        // console.log('CNN Response:', res.cnn);
        this.cnnisLoading = false;
        this.conkanprediction = res.conkan.prediction;
        this.conkanconfidence = res.conkan.probability;
        this.conkanisLoading = false;
      }, (err)=>{
        this.cnnerrorMsg = '⚠️ Could not reach the CNN API. Please ensure the server is running.';
        this.cnnisLoading = false;
        this.conkanerrorMsg = '⚠️ Could not reach the Con-Kan API. Please ensure the server is running.';
        this.conkanisLoading = false;
    })

      
        // For demonstration, we prioritize CNN's prediction. You can implement a more complex logic if needed.
  }

  get resultEmojicnn(): string {
    if (!this.cnnprediction) return '';
    return this.cnnprediction.toLowerCase() === 'cat' ? '🐱' : '🐶';
  }

  get resultGradientcnn(): string {
    if (!this.cnnprediction) return '';
    return this.cnnprediction.toLowerCase() === 'cat'
      ? 'linear-gradient(135deg, #ffeef8, #ffd6f0)'
      : 'linear-gradient(135deg, #fff8e8, #ffe5c0)';
  }

  get resultEmojiconkan(): string {
    if (!this.conkanprediction) return '';
    return this.conkanprediction.toLowerCase() === 'cat' ? '🐱' : '🐶';
  }

  get resultGradientconkan(): string {
    if (!this.conkanprediction) return '';
    return this.conkanprediction.toLowerCase() === 'cat'
      ? 'linear-gradient(135deg, #ffeef8, #ffd6f0)'
      : 'linear-gradient(135deg, #fff8e8, #ffe5c0)';
  }
}