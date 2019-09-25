import { Component, Input, OnInit } from '@angular/core';
import { TemplateDto } from "../../../shared/models";

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

}
