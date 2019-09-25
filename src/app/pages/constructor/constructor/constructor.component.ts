import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { ItemModel, TemplateDto } from '../../../shared/models';
import { MatSidenav } from "@angular/material";
import { ItemsSettingsService } from "../../../shared/services/items-settings/items-settings.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit, AfterViewInit {

  public item$: Observable<ItemModel> = this.itemsSettingsService.getItem;

  @Input() public template: TemplateDto;

  @ViewChild('drawer', {static: false}) public sidebar: MatSidenav;

  constructor(
      public readonly itemsSettingsService: ItemsSettingsService
  ) { }

  ngOnInit() {
    console.log(this.template);
  }

  ngAfterViewInit(): void {
    this.itemsSettingsService.sidebar = this.sidebar;
  }

}
