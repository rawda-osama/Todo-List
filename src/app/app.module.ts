import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todolist/todolist.component';
import { AddbuttonComponent } from './addbutton/addbutton.component';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';
import { DeletebuttonComponent } from './deletebutton/deletebutton.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent,
    AddbuttonComponent,
    InputComponent,
    ListComponent,
    DeletebuttonComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
