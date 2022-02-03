import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apod } from 'src/app/core/models/apod.model';
import { ApodService } from '../../services/apod.service';
import * as moment from 'moment';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  apods$!: Observable<Apod[]>;
  actual = new Date();
  now = moment();
  end_date = (this.now.format('YYYY-MM-DD'));
  start_date = (this.now.subtract(5, 'days').format('YYYY-MM-DD'));

  constructor(
    private apodService: ApodService
    ) { }

  ngOnInit(): void {
    this.apods$ = this.apodService.apods(this.start_date, this.end_date);
  }

}
