import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from "rxjs/operators";
import { Country } from '../../interface/pais.interface';

import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {

  pais!: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService
    ) { }

  ngOnInit(): void {

  this.activatedRoute.params
  .pipe(
    switchMap(({id}) => this.paisService.buscarPaisPorId(id)),
    tap(console.log)
  )
    .subscribe(pais => this.pais = pais[0])
  }

}

/* Otra forma de hacerlo: 
leemos los parametros que vienen en el url, extraemos el id y ese id es el que tenemos que mandar a buscarPaisPorId. Este observable retorna un pais.
this.activatedRoute.params
    .subscribe(({id}) => {
      console.log(id);
      this.paisService.buscarPaisPorId(id)
      .subscribe(pais => {
        console.log(pais);
      })
    })*/