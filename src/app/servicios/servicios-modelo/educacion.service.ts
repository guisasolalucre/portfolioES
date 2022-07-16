import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from 'src/app/modelo/Educacion';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class EducacionService {

  private url = "http://localhost:8080/api"
  
  constructor(
    private http: HttpClient
  ) { }

  obtenerEducacion(): Observable<Educacion[]>{
    return this.http.get<Educacion[]>(`${this.url}/verEducacion`);
  }

  eliminarEducacion(edu: Educacion): Observable<Educacion>{
    return this.http.delete<Educacion>(`${this.url}/eliminarEducacion/${edu.id}`)
  }

  agregarEducacion(edu:Educacion): Observable<Educacion>{
    return this.http.post<Educacion>(`${this.url}/nuevaEducacion`, edu, httpOptions)
  }

  editarEducacion(edu:Educacion): Observable<Educacion>{
    return this.http.put<Educacion>(`${this.url}/editarEducacion/${edu.id}`, edu, httpOptions)
  }
}
