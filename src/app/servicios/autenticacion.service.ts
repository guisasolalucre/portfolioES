import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  url: string = "API";
  currentObjectSubject: BehaviorSubject<any>;

  constructor(private http: HttpClient) {
    this.currentObjectSubject = new BehaviorSubject<any>(JSON.parse(sessionStorage.getItem("currentUser") || ""));
  }

  iniciarSesion(credenciales: any): Observable<any> {
    return this.http.post(this.url, credenciales).pipe(map(data => {
      sessionStorage.setItem('currentUser', JSON.stringify(data));
      this.currentObjectSubject.next(data);
      return data;
    }))
  }

  get UsuarioAutenticado(){
    return this.currentObjectSubject.value;
  }
}
