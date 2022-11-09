import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  categoriaSeleccionada: string = 'general';
  paisSeleccionada: string = 'cu';

  categorias: any[] = [
    { value: 'general', name: 'General' },
    { value: 'business', name: 'Negocios' },
    { value: 'entertaiment', name: 'Entretenimientos' },
    { value: 'health', name: 'Salud' },
    { value: 'science', name: 'Ciencia' },
    { value: 'sports', name: 'Deportes' },
    { value: 'technology', name: 'Tecnología' },
  ]

  paises: any[] = [
    { value: 'cu', name: 'Cuba' },
    { value: 'us', name: 'Estados Unidos' },
    { value: 'fr', name: 'Francia' },
    { value: 'hu', name: 'Hungria' },
    { value: 'mx', name: 'México' },
    { value: 'uk', name: 'Reino Unido' },
    { value: 'ar', name: 'Argentina' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
