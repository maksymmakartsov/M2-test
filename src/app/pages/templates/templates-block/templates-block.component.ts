import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TemplateCardDto } from "../../../shared/models";
import { MatPaginator, PageEvent } from "@angular/material";
import { Observable } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-templates-block',
  templateUrl: './templates-block.component.html',
  styleUrls: ['./templates-block.component.scss']
})
export class TemplatesBlockComponent implements OnInit, AfterViewInit {
  @Input() public draftTemplates$: Observable<TemplateCardDto[]>;
  @Input() public publishedTemplates$: Observable<TemplateCardDto[]>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public filteredPublishedTemplates$: Observable<TemplateCardDto[]>;

  constructor(
      private readonly templatesListService: TemplatesListService,
      private readonly router: Router
  ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    const page: PageEvent = {previousPageIndex: 0, pageIndex: 0, pageSize: 2, length: 0};
    this.filteredPublishedTemplates$ = this.paginator.page.pipe(
        startWith(page),
        switchMap((params) => this.templatesListService.getPublishedTemplatesForPagination(params))
    );
  }

  changePagination(event: PageEvent) {
    this.filteredPublishedTemplates$ = this.templatesListService.getPublishedTemplatesForPagination(event);
  }

  public navigateToEditTemplate(id: number): void {
    this.router.navigate(['constructor', `${id}`]);
  }

}
