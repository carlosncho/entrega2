import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { E404ePageRoutingModule } from './e404e-routing.module';

import { E404ePage } from './e404e.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    E404ePageRoutingModule
  ],
  declarations: [E404ePage]
})
export class E404ePageModule {}
