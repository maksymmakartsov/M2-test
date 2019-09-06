import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { TemplateDto } from "../../../shared/models";
import { MatPaginator, PageEvent } from "@angular/material";
import { Observable } from "rxjs";
import { startWith, switchMap } from "rxjs/operators";
import { TemplatesListService } from "../../../shared/services/templates-list/templates-list.service";

@Component({
  selector: 'app-templates-block',
  templateUrl: './templates-block.component.html',
  styleUrls: ['./templates-block.component.scss']
})
export class TemplatesBlockComponent implements OnInit, AfterViewInit {
  @Input() public draftTemplates$: Observable<TemplateDto[]>;
  @Input() public publishedTemplates$: Observable<TemplateDto[]>;

  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  public filteredPublishedTemplates$: Observable<TemplateDto[]>;

  constructor(
      private readonly templatesListService: TemplatesListService
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

}
