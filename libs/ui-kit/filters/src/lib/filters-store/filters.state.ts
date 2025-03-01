import { Filters } from "./filter-model";

export interface FiltersState {
    products: Filters;
    orders: Filters;
  }
  
  export const initialState: FiltersState = {
    products: {
        regions: [],
        name: '',
        env: '',
        teamId: ''
    },
    orders: {
        regions: [],
        name: '',
        env: '',
        teamId: ''
    }
  };
  