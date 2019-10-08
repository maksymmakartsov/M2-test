import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchComponent implements OnInit {

  @Output() public searchEvent: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: FormGroup;
  private options: any[] = [
    {
      id: 1,
      name: 'Annual Fire Inspection'
    },
    {
      id: 2,
      name: 'Annual Backflow Inspection Template'
    },
    {
      id: 3,
      name: 'Template for 5 Year Obstruction Investigation with ...'
    },
    {
      id: 4,
      name: 'Inspection Template'
    }
  ];
  public filteredOptions$: Observable<any[]>;

  private _filter(value: string): any[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(
      private readonly fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.filteredOptions$ = this.searchForm.controls.search.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
    );
  }

  public createForm(): void {
    const fb = this.fb;
    this.searchForm = fb.group({
      search: fb.control('')
    })
  }

  public search(ts?): void {
    this.searchEvent.emit();
  }

}
