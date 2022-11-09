import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() tituloNoticias: string;
  @Input() tituloUsuarios: string;

  constructor() { 
    this.tituloNoticias = '';
    this.tituloUsuarios = '';
  }

  ngOnInit(): void {
  }

}
