import { Component, } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
    li {
      cursor: pointer;
    }
    `
  ]
})
export class PorPaisComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.hayError = false;
    this.termino = termino;
    
    this.paisService.buscarPais(termino)
    //ponemos el subscribe aqui porque no queremos retornar la info en el servicio, sino que queremos retornarla donde se llamó a buscarPais()
    .subscribe({
      next: (resp) => {
        // console.log(resp)
        this.paises = resp
        console.log(this.paises);
      },
      error: (err) => {
        this.hayError = true;
        this.paises = [];
      }
    })
  }

  sugerencias(termino: string) {
    this.hayError = false;
    this.termino = termino;
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(termino)
      .subscribe({
        next: paises => {
          this.paisesSugeridos = paises.splice(0,5)
        }, 
        error: err => {
          this.paisesSugeridos = []
        }
      });
  }  

  buscarSugerido(termino: string) {
    this.buscar(termino);
    
  }
}

//Así lo hace en el vídeo, pero con esta versión de angular han cambiado cosas y por eso lo hacemos diferente
// .subscribe(resp) => {
//   console.log(resp);
// }, (err) => {
//   this.hayError = true;
// }