import { Component, Input, OnInit } from '@angular/core';
import { ItemModel, ParagraphModel } from "../../../shared/models";
import { ItemsSettingsService } from "../../../shared/services/items-settings/items-settings.service";

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent implements OnInit {

  @Input() public paragraphData: ParagraphModel;

  constructor(
      private readonly itemsSettingsService: ItemsSettingsService
  ) { }

  ngOnInit() {
  }

  public openItemSettings(item: ItemModel): void {
    this.itemsSettingsService.showItemSettings(item);
  }

}
