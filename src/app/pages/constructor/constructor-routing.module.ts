import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';


const routes: Routes = [
    {
        path: '',
        component: CreateTemplateComponent
    },
    {
        path: ':id',
        component: EditTemplateComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ConstructorRoutingModule { }
