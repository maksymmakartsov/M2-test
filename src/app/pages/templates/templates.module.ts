import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { TemplatesBlockComponent } from './templates-block/templates-block.component';
import { TemplatesComponent } from './templates/templates.component';
import { TemplateCardComponent } from './template-card/template-card.component';
import { ReactiveFormsModule } from "@angular/forms";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MatFormFieldModule } from "@angular/material/form-field";
import { TemplatesListService } from "../../shared/services/templates-list/templates-list.service";
import { MatInputModule } from "@angular/material/input";
import { MatPaginatorModule } from "@angular/material";



@NgModule({
  declarations: [
    SearchComponent,
    TemplatesBlockComponent,
    TemplatesComponent,
    TemplateCardComponent
  ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatPaginatorModule
    ],
    providers: [
        TemplatesListService
    ]
})
export class TemplatesModule { }
