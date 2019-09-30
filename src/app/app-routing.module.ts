import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplatesComponent } from "./pages/templates/templates-page/templates.component";


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
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    anchorScrolling: 'enabled',
    scrollOffset: [0, 64]
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
