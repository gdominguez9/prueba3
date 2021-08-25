import { Injectable } from '@angular/core'; //Para inyeccion de dependencias
import { Observable, of } from 'rxjs';
import { Persona } from './Persona';
import { HttpClient } from '@angular/common/http'; 
import { environment } from 'src/environments/environment';


@Injectable({ 
  providedIn: 'root'
})
export class PersonaService {

  constructor(
    private http : HttpClient
  ) { }

  url: string = `${environment.url}Persona`

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

  anadirPersona(personaAdd: Persona): Observable<Persona> {
    const urlid = `${this.url}`;
    return this.http.post<Persona>(urlid,personaAdd);
  }

  editarPersona(id: number,personaUpdated: Persona): Observable<Persona> {
    const urlid = `${this.url}/${id}`;
    return this.http.put<Persona>(urlid,personaUpdated);
  }


}
