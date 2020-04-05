import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputFormComponent } from './components/input-form/input-form.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatInputModule, MatSnackBarModule, MatTableModule} from '@angular/material';
import { LogsComponent } from './components/logs/logs.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    ControlMessagesComponent,
    LogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

    MatButtonModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
