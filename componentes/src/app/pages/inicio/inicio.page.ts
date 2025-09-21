import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data';

@Component({
  selector: 'app-inicio',
  standalone: false,
  //imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes!: Observable<Componente[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.componentes = this.dataService.getMenuOpts();
  }
  
}
