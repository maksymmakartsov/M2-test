import { Component, Input, OnInit } from '@angular/core';
import { ParagraphModel, SectionModel, TemplateDto } from "../../../shared/models";
import { CdkDragDrop } from "@angular/cdk/drag-drop";

@Component({
  selector: 'app-preview-menu',
  templateUrl: './preview-menu.component.html',
  styleUrls: ['./preview-menu.component.scss']
})
export class PreviewMenuComponent implements OnInit {

  @Input() public template: TemplateDto;

  constructor() { }

  ngOnInit() {
  }

  public dropParagraph(event: CdkDragDrop<ParagraphModel[]>): void {
    console.log(event);
  }

  public dropSection(event: CdkDragDrop<SectionModel[]>): void {
    console.log(event);
  }

}
