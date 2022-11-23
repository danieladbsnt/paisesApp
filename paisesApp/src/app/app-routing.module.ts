import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PorCapitalComponent } from "./pais/pages/por-capital/por-capital.component";
import { PorPaisComponent } from "./pais/pages/por-pais/por-pais.component";
import { PorRegionComponent } from "./pais/pages/por-region/por-region.component";
import { VerPaisComponent } from "./pais/pages/ver-pais/ver-pais.component";

const routes: Routes = [
    {
        path: '',
        component: PorPaisComponent,
        pathMatch: "full" //esto es para que cuando estemos en la url con el path '', sea "exacto" ese path, porque si no se le pone el "full", puede ser que lo interprete como que la ruta /pais por ejemplo tambien valga por empezar con /
    },
    {
        path: 'region',
        component: PorRegionComponent,
    }, 
    {
        path: 'capital',
        component: PorCapitalComponent
    },
    {
        path: 'pais/:id',
        component: VerPaisComponent
    },
    {
        path:'**', //esta es la excepción, significa que cualquier otro path que no esté indicado más arriba, se redigirá a ''
        redirectTo: ''
    }
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {

}