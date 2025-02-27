import { Component } from '@angular/core';
import { ProductsComponent } from '@products';

@Component({
  imports: [ProductsComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {

}