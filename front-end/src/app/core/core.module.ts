import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [RouterModule],
  declarations: [NavbarComponent, HomeComponent],
  exports: [NavbarComponent]
})
export class CoreModule { }
