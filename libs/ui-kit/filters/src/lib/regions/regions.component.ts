import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgFor, NgIf } from '@angular/common';

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
  form!: FormGroup; 
  regions = ['us','uk','hk','cn'];
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      region: null
    });

    this.form.valueChanges.subscribe(region => {
      console.log('region ', region);
      this.filterChanged.emit(region);
    });
  }

}
