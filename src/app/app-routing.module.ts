import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from "./pages/templates/templates/templates.component";


const routes: Routes = [
  {
    path: '',
    component: TemplatesComponent
  },
  {
    path: 'constructor',
    loadChildren: () => import('./pages/constructor/constructor.module').then(mod => mod.ConstructorModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
