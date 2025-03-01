import { createAction, props } from '@ngrx/store';
import { Filters } from './filter-model';

export const setRegionsProductsFilters = createAction(
    '[Filters] Set Filter Value',
    props<{regions: string[]}>()
);