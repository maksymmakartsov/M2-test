import { Component, OnInit } from '@angular/core';
import { TemplateCardDto } from "../../../shared/models";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";
import { FILTERED_DRAFT_TEMPLATES_MOCK, FILTERED_PUBLISHED_TEMPLATES_MOCK } from "../../../mock";
import { Observable, of } from "rxjs";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public draftTemplates$: Observable<TemplateCardDto[]>;
  public publishedTemplates$: Observable<TemplateCardDto[]>;

  constructor(
      private readonly templatesListService: TemplatesListService
  ) { }

  ngOnInit() {
    this.draftTemplates$ = this.templatesListService.getDraftTemplates();
    this.publishedTemplates$ = this.templatesListService.getPublishedTemplates();
  }

  public onSearch(): void {
    this.draftTemplates$ = of(FILTERED_DRAFT_TEMPLATES_MOCK);
    this.publishedTemplates$ = of(FILTERED_PUBLISHED_TEMPLATES_MOCK);
  }

}
