import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AppRoutes } from './app.routes';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  title = 'app';
  routes = AppRoutes;
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon('post_add', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/post_add.svg'));
    iconRegistry.addSvgIcon('mouse', sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/mouse.svg'));
    iconRegistry.addSvgIcon(
      'github-circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/github-circle.svg')
    );
    iconRegistry.addSvgIcon(
      'cloud_circle',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/cloud_circle.svg')
    );
    iconRegistry.addSvgIcon(
      'shape-outline',
      sanitizer.bypassSecurityTrustResourceUrl('assets/img/icons/shape-outline.svg')
    );
  }
}
