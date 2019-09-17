import { Component, Input, OnInit } from '@angular/core';
import { SectionModel } from "../../../shared/models";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  @Input() public sectionData: SectionModel;

  constructor() { }

  ngOnInit() {
    console.log(this.sectionData);
  }

}
