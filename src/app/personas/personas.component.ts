import { Component, OnInit } from '@angular/core';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  //persona: Persona = {
  //  id: 1,
  //  name: 'Persona 1'
  //}

  personas: Persona[] = [];


  constructor(private personaService: PersonaService) { }

  ngOnInit(){
    this.getPersonas();
  }

  getPersonas(): void {
     this.personaService.getPersonas().subscribe
     (
      (response)=>
      {
        this.personas = response;
        console.log(this.personas)
      },

      (error)=>
      {
        console.log("Error in getPersonas:"+error);
      }
    ) 
  }

  borrar(persona: Persona): void {
    console.log("entra"+persona.id)
    this.personas = this.personas.filter(p => p !== persona);
    this.personaService.borrarPersona(persona.id).subscribe();
  }

}
