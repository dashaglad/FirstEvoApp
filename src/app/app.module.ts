import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentBComponent } from './component-b/component-b.component';
import { ComponentCComponent } from './component-c/component-c.component';
import { Add5PipePipe } from './add5-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentBComponent,
    ComponentCComponent,
    Add5PipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
