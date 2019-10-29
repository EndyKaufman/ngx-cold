import { Routes } from '@angular/router';
import { ColdClickPageRoutes } from './pages/cold-click-page/cold-click-page.routes';
import { ColdFormPageRoutes } from './pages/cold-form-page/cold-form-page.routes';
import { HomePageRoutes } from './pages/home-page/home-page.routes';

export const AppRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: './pages/home-page/home-page.module#HomePageModule',
    data: HomePageRoutes[0].data
  },
  {
    path: 'cold-click',
    loadChildren: './pages/cold-click-page/cold-click-page.module#ColdClickPageModule',
    data: ColdClickPageRoutes[0].data
  },
  {
    path: 'cold-form',
    loadChildren: './pages/cold-form-page/cold-form-page.module#ColdFormPageModule',
    data: ColdFormPageRoutes[0].data
  },
  {
    path: 'github',
    redirectTo: 'https://github.com/EndyKaufman/ngx-cold',
    data: {
      name: 'github',
      title: 'github',
      svgIcon: `github-circle`,
      visible: true
    }
  } /*,
  {
    path: '**',
    redirectTo: 'home'
  }*/
];
