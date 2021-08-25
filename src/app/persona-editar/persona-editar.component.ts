import { Component, Inject, Input, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-persona-editar',
  templateUrl: './persona-editar.component.html',
  styleUrls: ['./persona-editar.component.css']
})

export class PersonaEditarComponent implements OnInit {
  
  persona !: Persona; 

  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private personaService: PersonaService,
    private fb: FormBuilder
  ) { }


  formulario: FormGroup = this.fb.group({
    id: [''],
    password: ['',Validators.required],
    name: ['',[Validators.minLength(6),Validators.maxLength(10)]] ,
    surname: ['',Validators.required],
    company_email: ['',[ Validators.required, Validators.email,]],
    personal_email: ['',[ Validators.required, Validators.email,]],
    city: [''],
    created_date: ['']
  })
  
  ngOnInit(): void {
    console.log("inicializo")
    this.iniciaFormulario();
  }

  iniciaFormulario(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id)
      .subscribe
      (
        (response)=>
        { this.persona = response;
          console.log(this.persona)
          this.formulario.setValue(this.persona)
          console.log(this.formulario)},
    
        (error)=>
        { console.log("Error in editar:"+error);}
      ) 
  }

  cancelar() {
    this.location.back();
  }
 
  onSubmit() {
    console.log(this.formulario.value)
    this.personaService.editarPersona(Number(this.route.snapshot.paramMap.get('id')),this.formulario.value).subscribe();
    this.location.back();
  }


}
