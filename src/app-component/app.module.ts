import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { EditableModule } from '@ngneat/edit-in-place';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCheckboxModule,
    EditableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
