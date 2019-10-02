import { Injectable } from '@angular/core';
import { TemplateCardDto } from "../../models";
import {
  DRAFT_TEMPLATES_MOCK,
  FILTERED_DRAFT_TEMPLATES_MOCK,
  FILTERED_PUBLISHED_TEMPLATES_MOCK,
  PUBLISHED_TEMPLATES_MOCK
} from "../../../mock";
import { Observable, of } from "rxjs";
import { delay, map } from "rxjs/operators";

@Injectable()
export class TemplatesListService {

  constructor() { }

  public getDraftTemplates(filter: string): Observable<TemplateCardDto[]> {
    return filter === '1' ? of(FILTERED_DRAFT_TEMPLATES_MOCK) : of(DRAFT_TEMPLATES_MOCK);
  }

  public getPublishedTemplates(): Observable<TemplateCardDto[]> {
    return of(PUBLISHED_TEMPLATES_MOCK);
  }

  public getPublishedTemplatesForPagination(params: any): Observable<TemplateCardDto[]> {
    if (params.filter === '1') {
      return of(FILTERED_PUBLISHED_TEMPLATES_MOCK).pipe(
          delay(0),
          map((data) => {
            return data.slice(params.paginator.pageSize * params.paginator.pageIndex, params.paginator.pageSize * params.paginator.pageIndex + params.paginator.pageSize);
          })
      );
    }
    return of(PUBLISHED_TEMPLATES_MOCK).pipe(
        delay(0),
        map((data) => {
          return data.slice(params.paginator.pageSize * params.paginator.pageIndex, params.paginator.pageSize * params.paginator.pageIndex + params.paginator.pageSize);
        })
    );
  }
}
