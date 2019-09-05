import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() public searchEvent: EventEmitter<any> = new EventEmitter<any>();

  public searchForm: FormGroup;
  private options: string[] = [
    'Annual Fire Inspection',
    'Annual Backflow Inspection Template',
    'Template for 5 Year Obstruction Investigation with ...',
    'Inspection Template'
  ];
  public filteredOptions: Observable<string[]>;

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }

  constructor(
      private readonly fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.filteredOptions = this.searchForm.controls.search.valueChanges.pipe(
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

  public search(): void {
    this.searchEvent.emit();
  }

}
