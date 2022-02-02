import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, shareReplay } from 'rxjs';
import { Apod } from 'src/app/core/models/apod.model';
import { APODS } from 'src/app/core/models/mock-apod.model';
import { environment } from '../../../../environments/environment.prod';

const CACHE_SIZE = 1;

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private baseUrl = environment.baseUrl;
  private apiKey = environment.API_KEY;
  private start_date = '2020-09-10';
  private end_date = '2020-09-15';
  private cache$!: Observable<Apod[]>;

  constructor(
    private http: HttpClient
  ) { }

  getApod(date: string | Date) {
    return this.apods.pipe(
      map((apods: Apod[]) => apods.find(apod => apod.date === date)!)
    );
  }

  getApods(): Observable<Apod[]> {
    const params = new HttpParams()
          .set('api_key', this.apiKey)
          .set('start_date', this.start_date)
          .set('end_date', this.end_date);

    const url = `${this.baseUrl}/planetary/apod`;

    return this.http.get<Apod[]>(url, { params }).pipe(
        map(data => data.length ? data : APODS)
        )
  }

  get apods() {
    if (!this.cache$) {
      this.cache$ = this.getApods().pipe(
        shareReplay(CACHE_SIZE)
      );
    }

    return this.cache$;
  }

}
