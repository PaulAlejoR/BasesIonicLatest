import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  standalone: false,
  templateUrl: './progress.page.html',
  styleUrls: ['./progress.page.scss'],
})
export class ProgressPage implements OnInit {

  porcentaje: number = 0.83;

  constructor() { }

  ngOnInit() {
  }

  rangeEvent( event: any ){
    //console.log( event.detail.value );

    this.porcentaje = event.detail.value / 100;
  }
}
