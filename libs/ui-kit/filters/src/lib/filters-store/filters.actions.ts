import { createAction, props } from '@ngrx/store';

// Products

export const setRegionsProductsFilters = createAction(
    '[Filters] Set Regions Products Filter',
    props<{region: string}>()
);

export const setNameProductsFilters = createAction(
    '[Filters] Set Name Products Filter',
    props<{name: string}>()
);

// Orders

export const setRegionsOrdersFilters = createAction(
    '[Filters] Set Regions Products Filter',
    props<{region: string}>()
);

export const setNameOrdersFilters = createAction(
    '[Filters] Set Name Products Filter',
    props<{name: string}>()
);