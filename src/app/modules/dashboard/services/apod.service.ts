import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { Apod } from 'src/app/core/models/apod.model';
import { APODS } from 'src/app/core/models/mock-apod.model';
import { environment } from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {

  private baseUrl = environment.baseUrl;
  private appKey = environment.API_KEY;
  private start_date = '2020-09-10';
  private end_date = '2020-09-15';

  constructor(
    private http: HttpClient
  ) { }

  getApod(date: string | Date) {
    return this.getApods().pipe(
      map((apods: Apod[]) => apods.find(apod => apod.date === date)!)
    );
  }

  getApods(): Observable<Apod[]> {
    return this.http.get<Apod[]>(
      `${this.baseUrl}?api_key=${this.appKey}&start_date=${this.start_date}&end_date=${this.end_date}`
      ).pipe(
        map(data => data.length ? data : APODS)
        )
  }

}
