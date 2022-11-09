import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  @Output() parametrosSeleccionados = new EventEmitter<any>();
  categoriaSeleccionada: string = 'general';
  paisSeleccionado: string = 'us';

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
    { value: 'us', name: 'Estados Unidos' },
    { value: 'ar', name: 'Argentina' },
    { value: 'ca', name: 'Canadá' },
    { value: 'cu', name: 'Cuba' },
    { value: 'de', name: 'Alemania' },
    { value: 'fr', name: 'Francia' },
    { value: 'gb', name: 'Reino Unido' },
    { value: 'hu', name: 'Hungria' },
    { value: 'mx', name: 'México' },
    { value: 'ie', name: 'Irlanda' },
    { value: 'in', name: 'India' },
    { value: 'is', name: 'Israel' },
    { value: 'ru', name: 'Rusia' },
    { value: 'sa', name: 'Arabia Saudita' },
  ]


  constructor() { }

  ngOnInit(): void {
  }

  buscarNoticia(){
    /*console.log(this.categoriaSeleccionada);
    console.log(this.paisSeleccionado);*/

    const PARAMETROS = {
      categoria: this.categoriaSeleccionada,
      pais: this.paisSeleccionado
    }

    this.parametrosSeleccionados.emit(PARAMETROS);

  }

}
