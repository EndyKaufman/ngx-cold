import { Routes } from '@angular/router';
import { ColdFormPageComponent } from './cold-form-page.component';

export const ColdFormPageRoutes: Routes = [
  {
    path: '',
    component: ColdFormPageComponent,
    data: {
      name: 'cold-form',
      title: 'Cold form',
      visible: true,
      svgIcon: 'post_add'
    },
    children: []
  }
];
