import { Injectable } from '@angular/core';
import { TemplateCardDto } from "../../models";
import { DRAFT_TEMPLATES_MOCK, PUBLISHED_TEMPLATES_MOCK } from "../../../mock";
import { Observable, of } from "rxjs";
import { PageEvent } from "@angular/material";
import { delay, map } from "rxjs/operators";

@Injectable()
export class TemplatesListService {

  constructor() { }

  public getDraftTemplates(): Observable<TemplateCardDto[]> {
    return of(DRAFT_TEMPLATES_MOCK);
  }

  public getPublishedTemplates(): Observable<TemplateCardDto[]> {
    return of(PUBLISHED_TEMPLATES_MOCK);
  }

  public getPublishedTemplatesForPagination(params: PageEvent): Observable<TemplateCardDto[]> {
    return of(PUBLISHED_TEMPLATES_MOCK).pipe(
        delay(0),
        map((data) => {
          return data.slice(params.pageSize * params.pageIndex, params.pageSize * params.pageIndex + params.pageSize);
        })
    );
  }
}
