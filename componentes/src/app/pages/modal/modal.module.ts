import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { HeaderComponent } from 'src/app/components/header/header.component';
import {ComponentsModule} from 'src/app/components/components-module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    HeaderComponent,
    ComponentsModule
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
