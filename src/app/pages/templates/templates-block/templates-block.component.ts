import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateDto } from "../../../shared/models";
import { PageEvent } from "@angular/material";

@Component({
  selector: 'app-templates-block',
  templateUrl: './templates-block.component.html',
  styleUrls: ['./templates-block.component.scss']
})
export class TemplatesBlockComponent implements OnInit {
  @Input() public draftTemplates: TemplateDto[];
  @Input() public publishedTemplates: TemplateDto[];
  @Input() public length: number;

  @Output() public pageEvent: EventEmitter<PageEvent> = new EventEmitter<PageEvent>();

  constructor() { }

  ngOnInit() {
  }

  changePagination(event: PageEvent) {
    this.pageEvent.emit(event)
  }

}
