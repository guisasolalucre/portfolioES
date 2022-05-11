import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url: string = "API";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get('./assets/data/data.json');
  }

  /*obtenerDatos(): Observable<any> {
    return this.http.get<any>(this.url);
  }*/
}
