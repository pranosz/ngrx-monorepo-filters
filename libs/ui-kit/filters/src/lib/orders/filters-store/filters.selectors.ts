import { AppState } from "../../app.state";
import { createSelector } from '@ngrx/store';
import { OrdersFiltersState } from "./filters.state";

export const selectOrdersFilters = (state: AppState) => state.ordersFiltersState;

export const selectOrdersRegionsFilter = createSelector(
    selectOrdersFilters,
    (state: OrdersFiltersState) => state?.region
);

export const selectOrdersNameFilter = createSelector(
    selectOrdersFilters,
    (state: OrdersFiltersState) => state?.name
);