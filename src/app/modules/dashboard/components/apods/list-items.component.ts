import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Apod } from 'src/app/core/models/apod.model';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {

  apods$!: Observable<Apod[]>;
  actual = new Date();
  end_date = formatDate(this.actual.toLocaleDateString(), 'yyyy-MM-dd', 'en-US');
  start_date = formatDate(this.actual.setDate(this.actual.getDate() - 5), 'yyyy-MM-dd', 'en-US');

  constructor(
    private apodService: ApodService
    ) { }

  ngOnInit(): void {
    this.apods$ = this.apodService.apods(this.start_date, this.end_date);
  }

}
