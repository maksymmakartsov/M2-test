import { Injectable } from '@angular/core';
import { TemplateDto } from "../../models";
import { DRAFT_TEMPLATES_MOCK, PUBLISHED_TEMPLATES_MOCK } from "../../../mock";

@Injectable()
export class TemplatesListService {

  constructor() { }

  public getDraftTemplates(): TemplateDto[] {
    return DRAFT_TEMPLATES_MOCK;
  }

  public getPublishedTemplates(): TemplateDto[] {
    return PUBLISHED_TEMPLATES_MOCK;
  }
}
