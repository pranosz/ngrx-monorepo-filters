import { AppState } from "../../app.state";
import { createSelector } from '@ngrx/store';
import { ProductsFiltersState } from "./filters.state";

export const selectProductsFilters = (state: AppState) => {
    return state.productsFiltersState;
};

export const selectProductsRegionsFilter = createSelector(
    selectProductsFilters,
    (state: ProductsFiltersState) => state?.region
);

export const selectProductsNameFilter = createSelector(
    selectProductsFilters,
    (state: ProductsFiltersState) => state?.name
);