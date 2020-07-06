import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAComponent } from './pages/page-a/page-a.component';
import { PageBComponent } from './pages/page-b/page-b.component';


const routes: Routes = [
  {
    path: 'page-a',
    component: PageAComponent
  },
  {
    path: 'page-b',
    component: PageBComponent
  },
  {
    path: '',
    redirectTo: 'page-a',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
