import { createAction, props } from '@ngrx/store';

export const setRegionsProductsFilters = createAction(
    '[Filters] Set Regions Products Filter',
    props<{region: string}>()
);

export const setNameProductsFilters = createAction(
    '[Filters] Set Name Products Filter',
    props<{name: string}>()
);