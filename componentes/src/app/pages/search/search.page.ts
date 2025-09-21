import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: false
})
export class SearchPage implements OnInit {
  albums: any[] = [];
  constructor( private dataService: DataService ) { }

  ngOnInit() {
    this.dataService.getAlbums().subscribe(
      albums => { 
        console.log(albums);
        this.albums = albums;
      });
  }

  onSearchChange(event: any) { 
    console.log(event);
  }
}
