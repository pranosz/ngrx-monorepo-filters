import { inject, Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { FiltersDispatcher } from "../models/filters-dispatcher.model";
import { setNameProductsFilters, setRegionsProductsFilters } from "../products/filters-store/filters.actions";
import { setNameOrdersFilters, setRegionsOrdersFilters } from "../orders/filters-store/filters.actions";

@Injectable({
    providedIn: 'root'
})
export class FiltersDispatcherMap {
    private readonly filtersStore = inject(Store);
    private readonly filtersDispatcherMap: Map<string, (groupName: string) => void> = new Map();

    constructor() {
        this.filtersDispatcherMap.set(
            'products_regions', 
            (filterValue) => this.filtersStore.dispatch(setRegionsProductsFilters({region: filterValue}))
        );
        this.filtersDispatcherMap.set(
            'products_name', 
            (filterValue) => this.filtersStore.dispatch(setNameProductsFilters({name: filterValue}))
        );
        this.filtersDispatcherMap.set(
            'orders_regions', 
            (filterValue) => this.filtersStore.dispatch(setRegionsOrdersFilters({region: filterValue}))
        );
        this.filtersDispatcherMap.set(
            'orders_name', 
            (filterValue) => this.filtersStore.dispatch(setNameOrdersFilters({name: filterValue}))
        );
    }

    dispatchAction(filtersDispatcher: FiltersDispatcher): void {
        const key = `${filtersDispatcher.groupName}_${filtersDispatcher.filterType}`;
        const action = this.filtersDispatcherMap.get(key);
        if(action) {
            action(filtersDispatcher.filterValue);
        }
    }
}