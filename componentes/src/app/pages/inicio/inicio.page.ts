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
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/button'
    },
    {
      icon: 'checkmark-circle-outline',
      name: 'Check Box',
      redirectTo: '/check'
    },
    {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
    {
      icon: 'infinite-outline',
      name: 'Infinite-Scroll',
      redirectTo: '/infinite'
    },
    {
      icon: 'list-outline',
      name: 'List - Sliding',
      redirectTo: '/list'
    },
    {
      icon: 'reorder-three-outline',
      name: 'Lists - Reorder',
      redirectTo: '/list-reorder'
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
    },
    {
      icon: 'phone-portrait-outline',
      name: 'modal',
      redirectTo: '/modal'
    },
    {
      icon: 'logo-windows',
      name: 'Popover',
      redirectTo: '/popover'
    },
    {
      icon: 'code-working-outline',
      name: 'Progress Bar',
      redirectTo: '/progress'
    },
    {
      icon: 'copy-outline',
      name: 'Segment',
      redirectTo: '/segment'
    },
    {
      icon: 'albums-outline',
      name: 'Slides',
      redirectTo: '/slides'
    }, 
    {
      icon: 'refresh-outline',
      name: 'Refresher',
      redirectTo: '/refresher'
    },
    {
      icon: 'search-outline',
      name: 'Search',
      redirectTo: '/search'
    },
    
  ];

  constructor() { }

  ngOnInit() {
  }
  
}
