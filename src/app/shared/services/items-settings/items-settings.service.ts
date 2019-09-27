import { Injectable } from '@angular/core';
import { MatSidenav } from "@angular/material";
import { BehaviorSubject, Observable } from "rxjs";
import { ItemModel } from "../../models";

@Injectable()
export class ItemsSettingsService {

  private item$ = new BehaviorSubject<ItemModel>(null);

  public sidebar: MatSidenav;

  public get getItem(): any {
    return this.item$;
  }
  private set item(item: ItemModel | null) {
    this.item$.next(item);
  }

  constructor() { }

  public showItemSettings(item: ItemModel) {
    this.item = item;
    this.sidebar.toggle();
  }

  public onSidebarClosed(): void {
    this.item = null
  }
}
