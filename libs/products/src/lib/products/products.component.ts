import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FiltersComponent, NameComponent, RegionsComponent } from '@filters';

@Component({
  selector: 'products',
  imports: [
    CommonModule,
    FiltersComponent,
    RegionsComponent,
    NameComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {

  onFilterChanged(region: string): void {
    console.log('filter regions', region);
  }
}
