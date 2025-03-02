import { createSelector } from '@ngrx/store';
import { FiltersState } from './filters.state';
import { AppState } from '../app.state';

// Consider - split filters to products, orders

// Products
export const selectFilters = (state: AppState) => state.filters;

export const selectProductsFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.products
);

export const selectProductsRegionsFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.products.region
);

export const selectProductsNameFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.products.name
);

// Orders

export const selectOrdersFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.orders
);

export const selectOrdersRegionsFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.orders.region
);

export const selectOrdersNameFilter = createSelector(
    selectFilters,
    (state: FiltersState) => state.orders.name
);