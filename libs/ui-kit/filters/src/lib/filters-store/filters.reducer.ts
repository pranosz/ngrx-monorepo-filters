import { createReducer, on } from '@ngrx/store';
import { initialState } from './filters.state';
import { setRegionsProductsFilters } from './filters.actions';

export const filtersReducer = createReducer(
    initialState,
    on(setRegionsProductsFilters, (state, { regions }) => ({
        ...state,
        products: {...state, regions }
    }))
)