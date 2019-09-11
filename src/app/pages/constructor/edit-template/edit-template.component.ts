import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { TemplateDto } from "../../../shared/models";
import { switchMap } from "rxjs/operators";
import { ConstructorService } from "../../../shared/services/constructor/constructor.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-edit-template',
  templateUrl: './edit-template.component.html',
  styleUrls: ['./edit-template.component.scss']
})
export class EditTemplateComponent implements OnInit {

  public templateData$: Observable<TemplateDto>;

  constructor(
      private readonly route: ActivatedRoute,
      private readonly constructorService: ConstructorService
  ) { }

  ngOnInit() {
    this.templateData$ = this.route.paramMap.pipe(
      switchMap(params => this.constructorService.getTemplate(+params.get('id')))
    );
  }

}
