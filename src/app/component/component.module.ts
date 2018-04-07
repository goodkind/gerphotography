import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [SpinnerComponent, NavbarComponent],
  declarations: [SpinnerComponent, NavbarComponent]
})
export class ComponentModule { }
