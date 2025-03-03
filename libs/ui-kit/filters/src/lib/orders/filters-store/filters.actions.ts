import { createAction, props } from '@ngrx/store';

export const setRegionsOrdersFilters = createAction(
    '[Orders Filter] Set Regions Filter',
    props<{region: string}>()
);

export const setNameOrdersFilters = createAction(
    '[Orders Filter] Set Name Filter',
    props<{name: string}>()
);