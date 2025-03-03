import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';

@Component({
  imports: [
    RouterModule, 
    MatButtonModule,
    MatDividerModule
  ],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private readonly router = inject(Router);

  goToPage(page: string): void {
    this.router.navigateByUrl(`/${page}`);
  }
}
