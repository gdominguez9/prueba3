import { Injectable } from '@angular/core'; //Para inyeccion de dependencias
import { Observable, of } from 'rxjs';
import { Persona } from './Persona';
import { HttpClient } from '@angular/common/http'; 


@Injectable({ 
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http : HttpClient
  ) { }

  url: string = "http://localhost:3000/Persona"

  getPersonas():Observable<Persona[]>{ 
    return this.http.get<Persona[]>(this.url);
  }

  getPersona(id: number): Observable<Persona> {
    const urlid = `${this.url}/${id}`;
    return this.http.get<Persona>(urlid);
  }

  borrarPersona(id: number): Observable<Persona> { 
    const urlid = `${this.url}/${id}`;
    return this.http.delete<Persona>(urlid);
  }

  /*editarPersona(id: number, Persona: any): Observable<Persona> {
    const urlid = `${this.url}/${id}`;
    return this.http.put<Persona>(urlid,Persona);
  }*/

  editarPersona(id: number,personaUpdated: Persona): Observable<Persona> {
    const urlid = `${this.url}/${id}`;
    return this.http.put<Persona>(urlid,personaUpdated);
  }


}
