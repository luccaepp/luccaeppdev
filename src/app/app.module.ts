import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PortifolioComponent } from './portifolio/portifolio.component';
import { QuemsouComponent } from './quemsou/quemsou.component';


@NgModule({
  declarations: [
    AppComponent,
    PortifolioComponent,
    QuemsouComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
