import { createReducer, on } from '@ngrx/store';
import { initialState } from './filters.state';
import { setNameProductsFilters, setRegionsProductsFilters } from './filters.actions';

export const productsfiltersReducer = createReducer(
    initialState,

    on(setRegionsProductsFilters, (state, action) => ({
        ...state,
        region: action.region
    })),

    on(setNameProductsFilters, (state, action) => ({
        ...state,
        name: action.name
    })),
);