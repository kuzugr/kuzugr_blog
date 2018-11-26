import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateAccountComponent } from '../../components/account/create-account/create-account.component';
import { EditAccountComponent } from '../../components/account/edit-account/edit-account.component';
import { LoginComponent } from '../../components/account/login/login.component';
import { ArticleComponent } from '../../components/article/article.component';

const LayoutRoutes: Routes = [
  { path: '', component: ArticleComponent },
  { path: 'registration', component: CreateAccountComponent },
  { path: 'account', component: EditAccountComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(LayoutRoutes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
