import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Apod } from 'src/app/core/models/apod.model';
import { ApodService } from '../../services/apod.service';

@Component({
  selector: 'app-detail-item',
  templateUrl: './detail-item.component.html',
  styleUrls: ['./detail-item.component.css']
})
export class DetailItemComponent implements OnInit {

  apod$!: Observable<Apod>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apodService: ApodService
  ) { }

  ngOnInit(): void {
    this.apod$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.apodService.getApod(params.get('id')!))
    );
  }

  gotoApods(apod: Apod) {
    this.router.navigate(['/dashboard']);
  }

}
