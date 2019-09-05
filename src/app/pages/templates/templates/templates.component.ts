import { Component, OnInit } from '@angular/core';
import { TemplateDto } from "../../../shared/models";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";
import { FILTERED_DRAFT_TEMPLATES_MOCK, FILTERED_PUBLISHED_TEMPLATES_MOCK } from "../../../mock";
import { PageEvent } from "@angular/material";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit {

  public draftTemplates: TemplateDto[];
  public filteredPublishedTemplates: TemplateDto[];
  public publishedTemplates: TemplateDto[];

  constructor(
      private readonly templatesListService: TemplatesListService
  ) { }

  ngOnInit() {
    this.draftTemplates = this.templatesListService.getDraftTemplates();
    this.publishedTemplates = this.templatesListService.getPublishedTemplates();

    const page: PageEvent = {previousPageIndex: 0, pageIndex: 0, pageSize: 2, length: 0};
    this.filteredPublishedTemplates = this.publishedTemplates.slice(page.pageSize * page.pageIndex, page.pageSize * page.pageIndex + page.pageSize);
  }

  public onSearch(): void {
    this.draftTemplates = FILTERED_DRAFT_TEMPLATES_MOCK;
    this.publishedTemplates = FILTERED_PUBLISHED_TEMPLATES_MOCK;
  }

  public onPageEvent(event): void {
    this.filteredPublishedTemplates = this.publishedTemplates.slice(event.pageSize * event.pageIndex, event.pageSize * event.pageIndex + event.pageSize);
  }

}
