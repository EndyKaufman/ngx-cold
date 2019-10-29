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
import { FormBasicModule } from './form-basic/form-basic.module';
import { FormWithHttpRequestModule } from './form-with-http-request/form-with-http-request.module';
import { ColdFormPageComponent } from './cold-form-page.component';
import { ColdFormPageRoutes } from './cold-form-page.routes';
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(ColdFormPageRoutes),
    MarkdownModule.forRoot(),
    DocsExampleModule.forRoot(),
    SourceTabsModule,
    NgxColdModule,
    FlexLayoutModule,
    MatInputModule,
    MatButtonModule,
    FormBasicModule,
    FormWithHttpRequestModule
  ],
  declarations: [ColdFormPageComponent]
})
export class ColdFormPageModule {}
