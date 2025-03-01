import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'filter-name',
  imports: [
    ReactiveFormsModule, 
    MatFormFieldModule, 
    MatInputModule
  ],
  templateUrl: './name.component.html',
  styleUrl: './name.component.scss',
})
export class NameComponent implements OnInit {
  private readonly fb = inject(FormBuilder);
  form!: FormGroup; 
  @Input() groupName!: string;
  @Output() filterChanged: EventEmitter<string> = new EventEmitter<string>();

  ngOnInit(): void {
    console.log(' name ', this.groupName);
    this.form = this.fb.group({
      name: ''
    });

    this.form.valueChanges.subscribe(name => {
      console.log('name ', name);
      this.filterChanged.emit(name);
    });
  }
}