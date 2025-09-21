import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data';

@Component({
  selector: 'app-segment',
  standalone: false,
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {
  
  superHeroes!: Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.superHeroes = this.dataService.getHeroes();
  }


  segmentChanged( event: any ){
    console.log( event.detail.value );
  }
}
