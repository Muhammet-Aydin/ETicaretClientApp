import { NgModule } from '@angular/core';
import { LayoutModule } from './layout/layout.module';
import { AppComponent } from '../app.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';
import { UIModule } from '../ui/ui.module';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from './components/components.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LayoutModule,
    ComponentsModule
  ],
  exports:
  [
    LayoutModule,
  ]
})
export class AdminModule { }
