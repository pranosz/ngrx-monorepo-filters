export interface ProductsFiltersState {
    region: string;
    name: string;
    env: string;
    teamId: string;
}
  
export const initialState: ProductsFiltersState = {
    region: '',
    name: '',
    env: '',
    teamId: ''
};