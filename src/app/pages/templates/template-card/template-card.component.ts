import { Component, Input, OnInit } from '@angular/core';
import { TemplateDto } from "../../../shared/models";

@Component({
  selector: 'app-template-card',
  templateUrl: './template-card.component.html',
  styleUrls: ['./template-card.component.scss']
})
export class TemplateCardComponent implements OnInit {
  @Input() public template: TemplateDto;
  @Input() public type: string;

  constructor() { }

  ngOnInit() {
  }

}
