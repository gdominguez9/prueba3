import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { PersonaService } from '../persona.service';
import { Persona } from '../Persona';
//Estos dos imports son para hacer la subruta
import { ActivatedRoute, Router } from '@angular/router'; 
//import { Location } from '@angular/common';



@Component({
  selector: 'app-persona-detail',
  templateUrl: './persona-detail.component.html',
  styleUrls: ['./persona-detail.component.css']
})
export class PersonaDetailComponent implements OnInit {

  //persona: Persona | undefined;
  @Input() persona?: Persona; //Entrada que le proporciona el padre
  @Output() borrarEmit:EventEmitter<number> = new EventEmitter()
  
  constructor(
    //private personaService: PersonaService,
    private route: Router
    //private location: Location
  ) { }

  ngOnInit(): void {
    //this.getPersona();
  }
  borrar(id: number): void {
    console.log("entra birrar en detail"+id)
    this.borrarEmit.emit(id);
  }

  public updatePersona(id:number): void{  //(id:number)

    console.log("En update "+id);
    //this.route.navigate(["/prueba/"+id])
    this.route.navigate(["/editar/"+id])
  }

   //goBack(): void {
  //  this.location.back();
  //}

}
