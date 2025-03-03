import { createReducer, on } from '@ngrx/store';
import { initialState } from './filters.state';
import { 
    setNameOrdersFilters, 
    setRegionsOrdersFilters 
} from './filters.actions';

export const ordersfiltersReducer = createReducer(
    initialState,

    on(setRegionsOrdersFilters, (state, { region }) => ({
        ...state,
        region
    })),

    on(setNameOrdersFilters, (state, { name }) => ({
        ...state,
        name
    })),
);