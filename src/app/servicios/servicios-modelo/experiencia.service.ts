import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from 'src/app/interfaces/Experiencia';

const httpOptions= {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {

  private url = "http://localhost:8080/api"
  
  constructor(
    private http: HttpClient
  ) { }

  obtenerExperiencia(): Observable<Experiencia[]>{
    return this.http.get<Experiencia[]>(`${this.url}/verExperiencia`);
  }

  eliminarExperiencia(exp: Experiencia):Observable<Experiencia>{
    return this.http.delete<Experiencia>(`${this.url}/eliminarExperiencia/${exp.id}`)
  }

  agregarExperiencia(exp:Experiencia):Observable<Experiencia>{
    return this.http.post<Experiencia>(`${this.url}/nuevaExperiencia`, exp, httpOptions)
  }

  editarExperiencia(exp:Experiencia):Observable<Experiencia>{
    return this.http.put<Experiencia>(`${this.url}/editarExperiencia/${exp.id}`, exp, httpOptions)
  }
}