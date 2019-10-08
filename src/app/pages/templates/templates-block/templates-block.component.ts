import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TemplateCardDto } from "../../../shared/models";

@Component({
  selector: 'app-templates-block',
  templateUrl: './templates-block.component.html',
  styleUrls: ['./templates-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TemplatesBlockComponent implements OnInit {
  @Input() public templatesList: TemplateCardDto[];
  @Input() public templateType: string;

  @Output() public editTemplate: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public navigateToEditTemplate(id: number): void {
    this.editTemplate.emit(id);
  }

}
