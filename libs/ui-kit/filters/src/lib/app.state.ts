import { OrdersFiltersState } from "./orders/filters-store/filters.state";
import { ProductsFiltersState } from "./products/filters-store/filters.state";

export interface AppState {
    productsFiltersState: ProductsFiltersState;
    ordersFiltersState: OrdersFiltersState;
}