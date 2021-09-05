import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BlocksPageComponent} from './pages/blocks-page/blocks-page.component';
import {TablePageComponent} from './pages/table-page/table-page.component';
import {DetailPageComponent} from './pages/detail-page/detail-page.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'blocks'},
  {path: 'blocks', component: BlocksPageComponent},
  {path: 'table', component: TablePageComponent},
  {path: 'detail/:login', component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
