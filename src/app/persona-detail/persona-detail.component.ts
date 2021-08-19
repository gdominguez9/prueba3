import { Component, OnInit, Input} from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../persona';
//Estos dos imports son para hacer la subruta
import { ActivatedRoute } from '@angular/router'; 
import { Location } from '@angular/common';



@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  persona: Persona | undefined;
  //@Input() persona?: Persona; //Entrada que le proporciona el padre

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonaService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.getPersona();
  }

  getPersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id)
      .subscribe(persona => this.persona = persona);
  }

  goBack(): void {
    this.location.back();
  }

}
