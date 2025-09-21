import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AlertPageRoutingModule } from './alert-routing.module';

import { AlertPage } from './alert.page';
import { RouterModule } from '@angular/router';

import { ComponentsModule } from 'src/app/components/components-module';
import { HeaderComponent } from 'src/app/components/header/header.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AlertPageRoutingModule,
    RouterModule,
    ComponentsModule,
    HeaderComponent
  ],
  declarations: [AlertPage]
})
export class AlertPageModule {}
