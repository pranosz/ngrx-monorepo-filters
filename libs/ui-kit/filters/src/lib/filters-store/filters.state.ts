import { Filter } from "../models/filter.model";

export interface FiltersState {
    products: Filter;
    orders: Filter;
  }
  
  export const initialState: FiltersState = {
    products: {
        region: '',
        name: '',
        env: '',
        teamId: ''
    },
    orders: {
        region: '',
        name: '',
        env: '',
        teamId: ''
    }
  };
  