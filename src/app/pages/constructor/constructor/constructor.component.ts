import { Component, Input, OnInit } from '@angular/core';
import { TemplateDto } from "../../../shared/models";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit {

  @Input() public template: TemplateDto;

  constructor() { }

  ngOnInit() {
    console.log(this.template);
  }

}
