import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { HttpClientModule }        from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent }        from './app.component';
import { HomeComponent }       from './components/home/home.component';
import { TestModelComponent }  from './components/test-model/test-model.component';
import { KnowKanComponent }    from './components/know-kan/know-kan.component';
import { AboutCnnComponent }   from './components/about-cnn/about-cnn.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TestModelComponent,
    KnowKanComponent,
    AboutCnnComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}