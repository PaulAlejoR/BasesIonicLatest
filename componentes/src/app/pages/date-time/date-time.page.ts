import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false,
})
export class DateTimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  camheFechaNacimiento: Date = new Date();

  cambioFecha(event: any) {
    this.fechaNacimiento = new Date(event.detail.value);
    console.log(this.fechaNacimiento);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
