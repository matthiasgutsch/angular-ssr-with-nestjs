import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path: '', component: UsersComponent, pathMatch: 'full'},
  { path: ':users', component: UsersComponent },
  { path: ':news', component: UsersComponent },
  { path: 'news/:slug', component: UserDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
