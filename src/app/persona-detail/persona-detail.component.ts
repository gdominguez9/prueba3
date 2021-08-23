import { Component, OnInit, Input} from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../Persona';
//Estos dos imports son para hacer la subruta
//import { ActivatedRoute } from '@angular/router'; 
//import { Location } from '@angular/common';



@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  //persona: Persona | undefined;
  @Input() persona?: Persona; //Entrada que le proporciona el padre

  constructor(
    //private personaService: PersonaService,
    //private route: ActivatedRoute,
    //private location: Location
  ) { }

  ngOnInit(): void {
    //this.getPersona();
  }

  //getPersona(): void {
  //  const id = Number(this.route.snapshot.paramMap.get('id'));
  //  this.personaService.getPersona(id)
  //    .subscribe(persona => this.persona = persona);
  //}

  //personas: Persona[] = [];

  //getPersonas(): void {
  //   this.personaService.getPersonas()
  //    .subscribe(personas => this.personas = personas); //Porque esperamos un Observable<>
  //}

   //goBack(): void {
  //  this.location.back();
  //}

}
