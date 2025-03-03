export interface OrdersFiltersState {
    region: string;
    name: string;
    teamId: string;
}
  
export const initialState: OrdersFiltersState = {
    region: '',
    name: '',
    teamId: ''
};