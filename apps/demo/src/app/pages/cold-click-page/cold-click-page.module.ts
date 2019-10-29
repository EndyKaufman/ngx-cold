import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';
import { NgxColdModule } from 'ngx-cold';
import { MarkdownModule } from 'ngx-markdown';
import { DocsExampleModule } from '../../components/docs-example/docs-example.module';
import { SourceTabsModule } from '../../components/source-tabs/source-tabs.module';
import { SharedModule } from '../../shared/shared.module';
import { ClickBasicModule } from './click-basic/click-basic.module';
import { ClickWithHttpRequestModule } from './click-with-http-request/click-with-http-request.module';
import { ColdClickPageComponent } from './cold-click-page.component';
import { ColdClickPageRoutes } from './cold-click-page.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ColdClickPageRoutes),
    MarkdownModule.forRoot(),
    DocsExampleModule.forRoot(),
    SourceTabsModule,
    NgxColdModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    ClickBasicModule,
    ClickWithHttpRequestModule
  ],
  declarations: [ColdClickPageComponent]
})
export class ColdClickPageModule {}
