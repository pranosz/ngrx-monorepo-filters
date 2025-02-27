import { Component } from '@angular/core';
import { FiltersComponent, NameComponent, RegionsComponent } from '@filters';

@Component({
  selector: 'lib-orders',
  imports: [
    FiltersComponent,
    RegionsComponent,
    NameComponent
  ],
  templateUrl: './orders.component.html',
  styleUrl: './orders.component.css',
})
export class OrdersComponent {

  onFilterChanged(region: string): void {
    console.log('filter regions', region);
  }
}
