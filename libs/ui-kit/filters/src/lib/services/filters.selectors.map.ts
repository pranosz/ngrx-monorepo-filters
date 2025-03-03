import { inject, Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { Observable, of, tap } from "rxjs";
import { FiltersSelectors } from "../models/filters-selectors.model";
import { selectProductsNameFilter, selectProductsRegionsFilter } from "../products/filters-store/filters.selectors";
import { selectOrdersNameFilter, selectOrdersRegionsFilter } from "../orders/filters-store/filters.selectors";

@Injectable({
    providedIn: 'root'
})
export class FiltersSelectorsMap {
    private readonly filtersStore = inject(Store);
    private readonly filtersSelectorsMap: Map<string, () => Observable<string>> = new Map();

    constructor(){
        this.filtersSelectorsMap.set(
            'products_regions', 
            () => this.filtersStore.select(selectProductsRegionsFilter)
        );
        this.filtersSelectorsMap.set(
            'products_name', 
            () => this.filtersStore.select(selectProductsNameFilter)
        );
        this.filtersSelectorsMap.set(
            'orders_regions', 
            () => this.filtersStore.select(selectOrdersRegionsFilter)
        );
        this.filtersSelectorsMap.set(
            'orders_name', 
            () => this.filtersStore.select(selectOrdersNameFilter)
        );
    }

    selectAction(filtersSelectors: FiltersSelectors): Observable<string> {
        const key = `${filtersSelectors.groupName}_${filtersSelectors.filterType}`;
        const action = this.filtersSelectorsMap.get(key);

        if(!action) return of();
            
        return action();
    }
}