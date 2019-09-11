import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { ConstructorRoutingModule } from "./constructor-routing.module";
import { ConstructorService } from "../../shared/services/constructor/constructor.service";



@NgModule({
  declarations: [ConstructorComponent, SectionComponent, ParagraphComponent, CreateTemplateComponent, EditTemplateComponent],
  imports: [
    CommonModule,
    ConstructorRoutingModule
  ],
  providers: [
      ConstructorService
  ]
})
export class ConstructorModule { }
