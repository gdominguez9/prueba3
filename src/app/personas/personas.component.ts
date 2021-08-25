import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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


  constructor(
    private personaService: PersonaService,
    private route: Router
    ) { }

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

  public addPersona(): void{  //(id:number)

    console.log("En add");
    const id = this.personas[this.personas.length-1].id;
    this.route.navigate(["/add/"+id])
  }

  public  borrar(id: number): void {
    console.log("entra en padre"+id)
     this.personaService.borrarPersona(id).subscribe( (ok) => {
       this.personas = this.personas.filter(p => p.id !==id);}
      );
    //this.personas = this.personas.filter(p => p !== persona);
    //this.personaService.borrarPersona(persona.id).subscribe();
  }
  
}
