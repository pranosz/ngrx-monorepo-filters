import { inject, Injectable } from "@angular/core";
import { Store } from '@ngrx/store';
import { 
    setNameOrdersFilters, 
    setNameProductsFilters, 
    setRegionsOrdersFilters, 
    setRegionsProductsFilters 
} from "../filters-store/filters.actions";
import { FiltersDispatcher } from "../models/filters-dispatcher.model";

@Injectable({
    providedIn: 'root'
})
export class FiltersDispatcherMap {
    private readonly filtersStore = inject(Store);
    private readonly filtersDispatcherMap: Map<object, (groupName: string) => void> = new Map();

    constructor() {
        this.filtersDispatcherMap.set(
            {groupName: 'products', filterType: 'regions', filterValue: ''}, 
            (filterValue) => this.filtersStore.dispatch(setRegionsProductsFilters({region: filterValue}))
        );
        this.filtersDispatcherMap.set(
            {groupName: 'products', filterType: 'name', filterValue: ''}, 
            (filterValue) => this.filtersStore.dispatch(setNameProductsFilters({name: filterValue}))
        );
        this.filtersDispatcherMap.set(
            {groupName: 'products', filterType: 'regions', filterValue: ''}, 
            (filterValue) => this.filtersStore.dispatch(setRegionsOrdersFilters({region: filterValue}))
        );
        this.filtersDispatcherMap.set(
            {groupName: 'products', filterType: 'name', filterValue: ''}, 
            (filterValue) => this.filtersStore.dispatch(setNameOrdersFilters({name: filterValue}))
        );
    }

    dispatchAction(filtersDispatcher: FiltersDispatcher): void {
        console.log('dispatchAction ', filtersDispatcher.filterValue);
        const action = this.filtersDispatcherMap.get(filtersDispatcher);
        if(action) {
            action(filtersDispatcher.filterValue);
        }
    }
}