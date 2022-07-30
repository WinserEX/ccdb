import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [{ path: '', component: FeaturesComponent }, { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) }, { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }, { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
