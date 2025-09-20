import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fab',
  standalone: false,
  templateUrl: './fab.page.html',
  styleUrls: ['./fab.page.scss'],
})
export class FabPage implements OnInit {

  data = Array(100);

  constructor() { }

  ngOnInit() {
  }

}
