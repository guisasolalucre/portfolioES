import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PortafolioService {

  url: string = "http://localhost:8080/api";

  constructor(private http: HttpClient) { }

  obtenerDatos(): Observable<any> {
    return this.http.get(this.url + "/datos");
  }

  obtenerEducacion(): Observable<any> {
    return this.http.get(this.url + "/verEducacion")
  }

  obtenerExperiencia(): Observable<any> {
    return this.http.get(this.url + "/verExperiencia")
  }

  obtenerHabilidades(): Observable<any> {
    return this.http.get(this.url + "/verHabilidades")
  }

  obtenerProyectos(): Observable<any> {
    return this.http.get(this.url + "/verProyectos")
  }

}
