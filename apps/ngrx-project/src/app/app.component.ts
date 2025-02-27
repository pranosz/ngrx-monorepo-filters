import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ShopComponent } from './shop/shop.component';

@Component({
  imports: [RouterModule, ShopComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ngrx-project';
}
