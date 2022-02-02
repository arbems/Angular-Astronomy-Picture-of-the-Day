import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { CoreModule } from '../../core/core.module';

import { DashboardViewComponent } from './pages/dashboard-view.component';
import { ListItemsComponent } from './components/apods/list-items.component';
import { DetailItemComponent } from './components/apod/detail-item.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    DashboardViewComponent,
    ListItemsComponent,
    DetailItemComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    DashboardRoutingModule,
    SharedModule,
    CoreModule,
    //Angular Material
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ]
})
export class DashboardModule { }
