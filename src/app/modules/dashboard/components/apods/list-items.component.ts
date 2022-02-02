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

  constructor(
    private apodService: ApodService
    ) { }

  ngOnInit(): void {
    //this.apods$ = this.apodService.getApods();
    this.apods$ = this.apodService.apods;
  }

}
