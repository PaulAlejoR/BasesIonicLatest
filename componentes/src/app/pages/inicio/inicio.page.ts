import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

interface Componente {
  icon: string,
  name: string,
  redirectTo: string
}

@Component({
  selector: 'app-inicio',
  standalone: false,
  //imports: [IonicModule, CommonModule, FormsModule],
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente[] = [
    {
      icon: 'american-football-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'alert-circle-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    }, 
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    }, 
    {
      icon: 'refresh-circle-outline',
      name: 'loading',
      redirectTo: '/loading'
    }
    
  ];

  constructor() { }

  ngOnInit() {
  }
  
}
