import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { Persona } from '../Persona';
import { PersonaService } from '../persona.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-persona-add',
  templateUrl: './persona-add.component.html',
  styleUrls: ['./persona-add.component.css']
})
export class PersonaAddComponent implements OnInit {

  persona !: Persona;

  constructor(
    private personaService: PersonaService,
    private fb: FormBuilder,
    private location: Location,
    private route: ActivatedRoute
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
  }

  onSubmit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.anadirPersona(this.formulario.value).subscribe();
    this.location.back();
  }

  cancelar() {
    this.location.back();
  }

}
