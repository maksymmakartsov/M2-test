import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { TemplateCardDto } from "../../../shared/models";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";
import { combineLatest, Observable, of, Subject } from "rxjs";
import { MatPaginator, PageEvent } from "@angular/material";
import { map, startWith, switchMap } from "rxjs/operators";
import { Router } from "@angular/router";
import { FILTERED_PUBLISHED_TEMPLATES_MOCK } from "../../../mock";

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, AfterViewInit {

  public draftTemplates$: Observable<TemplateCardDto[]>;
  public publishedTemplates$: Observable<TemplateCardDto[]>;
  public filteredPublishedTemplates$: Observable<TemplateCardDto[]>;

  public filter$: Subject<string> = new Subject<string>();

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
      private readonly templatesListService: TemplatesListService,
      private readonly router: Router
  ) { }

  ngOnInit() {
    this.draftTemplates$ = this.filter$.pipe(
      startWith(''),
      switchMap((params) => this.templatesListService.getDraftTemplates(params))
    );
    this.publishedTemplates$ = this.templatesListService.getPublishedTemplates();
  }

  ngAfterViewInit() {
    const page: PageEvent = {previousPageIndex: 0, pageIndex: 0, pageSize: 2, length: 0};
    this.filteredPublishedTemplates$ = combineLatest(
        this.paginator.page.pipe(startWith(page)),
        this.filter$.pipe(startWith(''))
    ).pipe(
        map(([paginator, filter]: [PageEvent, string]) => {
          return {
            paginator: paginator,
            filter: filter
          }
        }),
        switchMap((params) => this.templatesListService.getPublishedTemplatesForPagination(params)),
    );
  }

  public onEditTemplate(id: number): void {
    this.router.navigate(['constructor', `${id}`]);
  }

  public onSearch(): void {
    this.publishedTemplates$ = of(FILTERED_PUBLISHED_TEMPLATES_MOCK);
    this.filter$.next('1');
  }

}
