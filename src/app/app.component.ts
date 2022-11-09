import { Component } from '@angular/core';
import { NoticiasService } from './services/noticias.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //API Key: 7248f98f8da94b5ba02f042792b1f05c

  title = 'noticia-api';
  listaDeNoticias: any[] = [];
  loading: boolean = false; 

  constructor(private _api: NoticiasService){

  }

  buscarNoticias(parametro: any){

    this.loading = true;
    this.listaDeNoticias = [];

    setTimeout(() => {

      this._api.getNoticias(parametro).subscribe(result => {
        console.log(result);
        this.loading=false;
        this.listaDeNoticias = result.articles;
      });
      
    }, 1000);
  }

}


