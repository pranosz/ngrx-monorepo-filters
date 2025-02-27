import { Route } from '@angular/router';
import { OrdersComponent } from '@orders';
import { ProductsComponent } from '@products';

export const appRoutes: Route[] = [
    {
        path:'', component: ProductsComponent,
    },
    {
        path:'products', component: ProductsComponent,
    },
    {
        path:'orders', component: OrdersComponent
    }
];
