import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from "../../../shared/models";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public item: ItemModel;

  constructor() { }

  ngOnInit() {
  }

}
