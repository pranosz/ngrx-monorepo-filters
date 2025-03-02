import { createReducer, on } from '@ngrx/store';
import { initialState } from './filters.state';
import { 
    setNameOrdersFilters, 
    setNameProductsFilters, 
    setRegionsOrdersFilters, 
    setRegionsProductsFilters 
} from './filters.actions';

export const filtersReducer = createReducer(
    initialState,

    on(setRegionsProductsFilters, (state, { region }) => ({
        ...state,
        products: {...state, region }
    })),

    on(setNameProductsFilters, (state, { name }) => ({
        ...state,
        products: {...state, name }
    })),

    on(setRegionsOrdersFilters, (state, { region }) => ({
        ...state,
        products: {...state, region }
    })),

    on(setNameOrdersFilters, (state, { name }) => ({
        ...state,
        products: {...state, name }
    }))
);