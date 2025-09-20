import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DateTimePageRoutingModule } from './date-time-routing.module';

import { DateTimePage } from './date-time.page';

import { ComponentsModule } from 'src/app/components/components-module';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DateTimePageRoutingModule,
    RouterModule,
    ComponentsModule,
    HeaderComponent
  ],
  declarations: [DateTimePage]
})
export class DateTimePageModule {}
