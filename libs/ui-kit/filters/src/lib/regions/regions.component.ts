import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';
import { FiltersDispatcherMap } from '../services/filters.dispatcher.map';
import { FiltersSelectorsMap } from '../services/filters.selectors.map';
import { distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'filter-regions',
  imports: [
    NgFor,
    NgIf,
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatInputModule
  ],
  templateUrl: './regions.component.html',
  styleUrl: './regions.component.scss',
})
export class RegionsComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  private readonly filtersDispatcherMap = inject(FiltersDispatcherMap);
  private readonly filtersSelectorsMap = inject(FiltersSelectorsMap);
  form!: FormGroup; 
  regions = ['eu','us','uk','hk','cn'];
  savedRegion: string | undefined = '';
  @Input() groupName!: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    this.form = this.fb.group({
      region: this.regions[0]
    });

    this.filtersSelectorsMap.selectAction(
      {
        groupName: this.groupName, 
        filterType: 'regions'
      }
    ).pipe(distinctUntilChanged()).subscribe(filterValue => {
      this.form.patchValue({region: filterValue});
    });

    this.form.valueChanges.subscribe(value => {
      this.filtersDispatcherMap.dispatchAction({
        groupName: this.groupName,
        filterType: 'regions',
        filterValue: value.region
      });
    });
  }
}
