import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
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
  private readonly fb = inject(FormBuilder);
  form!: FormGroup; 
  regions = ['eu','us','uk','hk','cn'];
  @Input() groupName!: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log('groupName ', this.groupName);
    this.form = this.fb.group({
      region: this.regions[0]
    });

    this.form.valueChanges.subscribe(region => {
      console.log('region ', region);
      this.filterChanged.emit(region);
    });
  }
}
