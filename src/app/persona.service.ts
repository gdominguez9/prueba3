import { Injectable } from '@angular/core'; //Para inyeccion de dependencias
import { Observable, of } from 'rxjs';
import { Persona } from './persona';
import { PERSONAS } from './lista-persona';


@Injectable({ 
  providedIn: 'root'
})
export class PersonaService {

  constructor() { }

  getPersonas(): Observable<Persona[]> {
    const personas = of(PERSONAS);
    return personas;
  }

  getPersona(id: number): Observable<Persona> {
    const persona = PERSONAS.find(p => p.id === id)!;
    return of(persona);
  }
}
