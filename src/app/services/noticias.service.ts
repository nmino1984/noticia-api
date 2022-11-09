import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient) { }

  getNoticias(paramentros: any): Observable<any> {

    const URL = 'https://newsapi.org/v2/top-headlines?country=' + paramentros.pais + '&category=' + paramentros.categoria +'&apiKey=7248f98f8da94b5ba02f042792b1f05c'

    return this.http.get(URL);

  }
}
