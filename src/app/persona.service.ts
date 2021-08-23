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

  //updatePersona(persona: Persona): Observable<Persona> {
  //  return this.http.put(this.url, persona, this.httpOptions);
  //}

  borrarPersona(id: number): Observable<Persona> { 
    const urlid = `${this.url}/${id}`;
    return this.http.delete<Persona>(urlid);
  }


}
