import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popover-info',
  standalone: true,
  imports: [IonicModule, CommonModule],
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
})
export class PopoverInfoComponent  implements OnInit {

  items = Array(40);

  constructor( private popoverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( valor: number ){
    console.log( valor );

    this.popoverCtrl.dismiss({
      objeto: valor
    });
  }

}
