import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardViewComponent } from './pages/dashboard-view.component';
import { ListItemsComponent } from './components/apods/list-items.component';
import { DetailItemComponent } from './components/apod/detail-item.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardViewComponent,
    children: [
      {
        path: '',
        children: [
          { path: 'apod/:id', component: DetailItemComponent },
          { path: '', component: ListItemsComponent }
        ]
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
