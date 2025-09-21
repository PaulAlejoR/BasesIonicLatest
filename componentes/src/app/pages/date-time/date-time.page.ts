import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-date-time",
  templateUrl: "./date-time.page.html",
  styleUrls: ["./date-time.page.scss"],
  standalone: false,
})
export class DateTimePage implements OnInit {
  fechaNacimiento: Date = new Date();
  isModalOpen = false;

  constructor() {}

  ngOnInit() {}

  cambioFecha(event: any) {
    this.fechaNacimiento = new Date(event.detail.value);
    this.setOpen(false);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
}
