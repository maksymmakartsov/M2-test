import { Injectable } from '@angular/core';
import { TemplateDto } from "../../models";
import { DRAFT_TEMPLATES_MOCK, PUBLISHED_TEMPLATES_MOCK } from "../../../mock";
import { Observable, of } from "rxjs";
import { PageEvent } from "@angular/material";
import { delay, map } from "rxjs/operators";

@Injectable()
export class TemplatesListService {

  constructor() { }

  public getDraftTemplates(): Observable<TemplateDto[]> {
    return of(DRAFT_TEMPLATES_MOCK);
  }

  public getPublishedTemplates(): Observable<TemplateDto[]> {
    return of(PUBLISHED_TEMPLATES_MOCK);
  }

  public getPublishedTemplatesForPagination(params: PageEvent): Observable<TemplateDto[]> {
    return of(PUBLISHED_TEMPLATES_MOCK).pipe(
        delay(1000),
        map((data) => {
          return data.slice(params.pageSize * params.pageIndex, params.pageSize * params.pageIndex + params.pageSize);
        })
    );
  }
}
