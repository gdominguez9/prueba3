import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-persona-borrar',
  templateUrl: './persona-borrar.component.html',
  styleUrls: ['./persona-borrar.component.css']
})
export class PersonaBorrarComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBackBorrar(): void {
    this.location.back();
  }

}
