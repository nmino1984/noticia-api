import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-usuarios',
  templateUrl: './listado-usuarios.component.html',
  styleUrls: ['./listado-usuarios.component.css']
})
export class ListadoUsuariosComponent implements OnInit {

  @Input() listaDeUsuarios: any;

  constructor() { }

  ngOnInit(): void {
  }

}
