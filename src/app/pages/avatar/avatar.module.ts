import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvatarPageRoutingModule } from './avatar-routing.module';

import { AvatarPage } from './avatar.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvatarPageRoutingModule,
    RouterModule,
    //ComponentsModule,
    //HeaderComponent
  ],
  declarations: [AvatarPage]
})
export class AvatarPageModule {}
