import { Component } from '@angular/core';

type Page = 'home' | 'test' | 'kan' | 'cnn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activePage: Page = 'home';
  menuOpen = false;
  theme:any='';
  themeToggle=false;

  ngOnInit(){
    this.theme=localStorage.getItem('theme');
    if(this.theme===null){
      this.theme='light'
    }
  }

  navigate(page: Page): void {
    this.activePage = page;
    this.menuOpen   = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  changeMode():void{
      if(localStorage.getItem('theme')==='light'){
        localStorage.setItem('theme','dark');
        document.querySelector('html')?.setAttribute('data-theme','dark');
      }else{
        localStorage.setItem('theme','light');
        document.querySelector('html')?.setAttribute('data-theme','light');
      }
  }
}