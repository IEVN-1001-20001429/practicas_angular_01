import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

import { AppComponent } from './app.component';
import { OperasBasComponent } from './formularios/operas-bas/operas-bas.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultiplicacionaxbComponent } from './formularios/multiplicacionaxb/multiplicacionaxb.component';

@NgModule({
  declarations: [
    AppComponent,
    OperasBasComponent,
    MultiplicacionaxbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
