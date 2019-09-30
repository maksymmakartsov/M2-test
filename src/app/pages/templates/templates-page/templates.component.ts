import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TemplateCardDto } from "../../../shared/models";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";
import { FILTERED_DRAFT_TEMPLATES_MOCK, FILTERED_PUBLISHED_TEMPLATES_MOCK } from "../../../mock";
import { Observable, of } from "rxjs";
import { MatPaginator, PageEvent } from "@angular/material";
import { startWith, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, AfterViewInit {

  public draftTemplates$: Observable<TemplateCardDto[]>;
  public publishedTemplates$: Observable<TemplateCardDto[]>;
  public filteredPublishedTemplates$: Observable<TemplateCardDto[]>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
      private readonly templatesListService: TemplatesListService,
      private readonly router: Router
  ) { }

  ngOnInit() {
    this.draftTemplates$ = this.templatesListService.getDraftTemplates();
    this.publishedTemplates$ = this.templatesListService.getPublishedTemplates();
  }

  ngAfterViewInit() {
    const page: PageEvent = {previousPageIndex: 0, pageIndex: 0, pageSize: 2, length: 0};
    this.filteredPublishedTemplates$ = this.paginator.page.pipe(
        startWith(page),
        switchMap((params) => this.templatesListService.getPublishedTemplatesForPagination(params))
    );
  }

  public onEditTemplate(id: number): void {
    this.router.navigate(['constructor', `${id}`]);
  }

  changePagination(event: PageEvent) {
    this.filteredPublishedTemplates$ = this.templatesListService.getPublishedTemplatesForPagination(event);
  }

  public onSearch(): void {
    this.draftTemplates$ = of(FILTERED_DRAFT_TEMPLATES_MOCK);
    this.publishedTemplates$ = of(FILTERED_PUBLISHED_TEMPLATES_MOCK);
  }

}
