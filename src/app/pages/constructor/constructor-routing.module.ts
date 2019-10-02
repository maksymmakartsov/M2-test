import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConstructorComponent } from "./constructor/constructor.component";


const routes: Routes = [
    // {
    //     path: 'new',
    //     component: ConstructorComponent
    // },
    {
        path: ':id',
        component: ConstructorComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstructorRoutingModule { }
