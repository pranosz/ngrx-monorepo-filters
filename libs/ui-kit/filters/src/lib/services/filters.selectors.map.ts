import { inject, Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, of } from "rxjs";
import { FiltersSelectors } from "../models/filters-selectors.model";
import { 
    selectOrdersNameFilter, 
    selectOrdersRegionsFilter, 
    selectProductsNameFilter, 
    selectProductsRegionsFilter 
} from "../filters-store/filters.selectors";

@Injectable({
    providedIn: 'root'
})
export class FiltersSelectorsMap {
    private readonly filtersStore = inject(Store);
    private readonly filtersSelectorsMap: Map<object, () => Observable<string | undefined>> = new Map();

    constructor(){
        this.filtersSelectorsMap.set(
            {filterGroup: 'products', filterType: 'regions'}, 
            () => this.filtersStore.select(selectProductsRegionsFilter)
        );
        this.filtersSelectorsMap.set(
            {filterGroup: 'products', filterType: 'name'}, 
            () => this.filtersStore.select(selectProductsNameFilter)
        );
        this.filtersSelectorsMap.set(
            {filterGroup: 'orders', filterType: 'regions'}, 
            () => this.filtersStore.select(selectOrdersRegionsFilter)
        );
        this.filtersSelectorsMap.set(
            {filterGroup: 'orders', filterType: 'name'}, 
            () => this.filtersStore.select(selectOrdersNameFilter)
        );
    }

    selectAction(filtersSelectors: FiltersSelectors): Observable<string | undefined> {
        const action = this.filtersSelectorsMap.get(filtersSelectors);
        console.log('selectAction ', action);

        if(!action) return of(undefined);
            
        return action();
    }
}