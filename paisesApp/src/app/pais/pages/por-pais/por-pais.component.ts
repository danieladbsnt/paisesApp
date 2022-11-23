import { Component, OnInit } from '@angular/core';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
})
export class PorPaisComponent {

  termino: string = ''
  hayError: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar() {
    this.hayError = false;
    console.log(this.termino);
    this.paisService.buscarPais(this.termino)
    //ponemos el subscribe aqui porque no queremos retornar la info en el servicio, sino que queremos retornarla donde se llamó a buscarPais()
    .subscribe({
      next: (paises) => {
        console.log(paises);
      },
      error: (err) => {
        this.hayError = true;
      }
    })
  }

}

//Así lo hace en el vídeo, pero con esta versión de angular han cambiado cosas y por eso lo hacemos diferente
// .subscribe(resp) => {
//   console.log(resp);
// }, (err) => {
//   this.hayError = true;
// }