import { Component } from '@angular/core';
import { Country } from '../../interface/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [ `
    button {
      margin-right: 5px
    }
  `]
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

constructor(private paisService: PaisService) {}

  getClass(region: string): string {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;  
    
    this.paisService.buscarRegion(region)
    .subscribe({
      next: (resp) => {
        this.paises = resp;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }

}
