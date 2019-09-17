import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionComponent } from './section/section.component';
import { ParagraphComponent } from './paragraph/paragraph.component';
import { ConstructorComponent } from './constructor/constructor.component';
import { CreateTemplateComponent } from './create-template/create-template.component';
import { EditTemplateComponent } from './edit-template/edit-template.component';
import { ConstructorRoutingModule } from "./constructor-routing.module";
import { ConstructorService } from "../../shared/services/constructor/constructor.service";
import { MatButtonModule, MatSelectModule, MatSidenavModule } from '@angular/material';
import { ItemComponent } from './item/item.component';
import { ItemsSettingsService } from "../../shared/services/items-settings/items-settings.service";



@NgModule({
  declarations: [ConstructorComponent, SectionComponent, ParagraphComponent, CreateTemplateComponent, EditTemplateComponent, ItemComponent],
    imports: [
        CommonModule,
        ConstructorRoutingModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatSidenavModule
    ],
  providers: [
      ConstructorService,
      ItemsSettingsService
  ]
})
export class ConstructorModule { }
