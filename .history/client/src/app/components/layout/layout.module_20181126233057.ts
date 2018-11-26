import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LayouyRoutingModule } from '../../components/layout/layout-routing.module';

import { DeviseComponent } from '../../components/devise/devise.component';
import { ArticleComponent } from '../../components/article/article.component';
import { CreateAccountComponent } from '../../components/account/create-account/create-account.component';
import { EditAccountComponent } from '../../components/account/edit-account/edit-account.component';
import { LoginComponent } from '../../components/account/login/login.component';
import { LayoutComponent } from '../../components/layout/layout.component';

@NgModule({
  declarations: [
    DeviseComponent,
    ArticleComponent,
    CreateAccountComponent,
    EditAccountComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    LayouyRoutingModule
  ],
  providers: []
})
export class AppModule { }
