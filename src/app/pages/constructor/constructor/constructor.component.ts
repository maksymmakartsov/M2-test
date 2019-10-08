import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ItemModel, TemplateDto } from '../../../shared/models';
import { MatSidenav } from "@angular/material";
import { ItemsSettingsService } from "../../../shared/services/items-settings/items-settings.service";
import { Observable, of } from "rxjs";
import { ActivatedRoute, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import { ConstructorService } from "../../../shared/services/constructor/constructor.service";

@Component({
  selector: 'app-constructor',
  templateUrl: './constructor.component.html',
  styleUrls: ['./constructor.component.scss']
})
export class ConstructorComponent implements OnInit, AfterViewInit {

  public item$: Observable<ItemModel> = this.itemsSettingsService.getItem;
  public template$: Observable<TemplateDto>;

  @ViewChild('drawer', {static: false}) public sidebar: MatSidenav;

  constructor(
      private readonly itemsSettingsService: ItemsSettingsService,
      private readonly activeRoute: ActivatedRoute,
      private readonly router: Router,
      private readonly constructorService: ConstructorService
  ) { }

  ngOnInit() {
    this.template$ = this.activeRoute.paramMap.pipe(
        switchMap(params => {
          const param = params.get('id');
          if (param === 'new') {
            return of(null);
          }
          if (!isNaN(+param)) {
            return this.constructorService.getTemplate(+param)
          }
          this.router.navigate(['/']);
          return of(null);
        })
    );
  }

  ngAfterViewInit(): void {
    this.itemsSettingsService.sidebar = this.sidebar;
  }

}
