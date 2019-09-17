import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { TemplateDto } from "../../models";
import { TEMPLATE_MOCK } from "../../../mock";

@Injectable()
export class ConstructorService {

  constructor() { }

  public getTemplate(id: number): Observable<TemplateDto> {
    return of(TEMPLATE_MOCK);
  }
}
