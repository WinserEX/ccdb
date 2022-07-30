import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features.component';

const routes: Routes = [{ path: '', component: FeaturesComponent }, { path: 'add', loadChildren: () => import('./add/add.module').then(m => m.AddModule) }, { path: 'edit', loadChildren: () => import('./edit/edit.module').then(m => m.EditModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
