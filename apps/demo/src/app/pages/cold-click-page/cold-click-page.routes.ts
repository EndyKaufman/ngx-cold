import { Routes } from '@angular/router';
import { ColdClickPageComponent } from './cold-click-page.component';

export const ColdClickPageRoutes: Routes = [
  {
    path: '',
    component: ColdClickPageComponent,
    data: {
      name: 'cold-click',
      title: 'Cold click',
      visible: true,
      svgIcon: 'mouse'
    },
    children: []
  }
];
