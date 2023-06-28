import { createSlice,PayloadAction } from '@reduxjs/toolkit';
import CartStorage, {CART_DATA} from '@/utils/storage'




const cartStorage = new CartStorage()
let items = cartStorage.retrieve();
console.log('available in cart: ',items);

const initialState:any = {items:cartStorage.products,count:cartStorage.products.length};
console.log('initial state: ',initialState)

export const cart = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        reset: ()=> initialState,
        add: (state,product_id:PayloadAction<string>) => {
            console.log(product_id.payload)
            
            let product_present = false

            if(state.items.includes(product_id.payload)){
                console.log('1-2-3')
                cartStorage.add(product_id.payload);

            } else {
                console.log('7-6-5');
                state.items.push(product_id.payload)
                cartStorage.add(product_id.payload)
                
            }
            
             
        },
        remove: (state) => {

        }
    }
});

export const {
    add,
    reset,
    remove,
} = cart.actions;

export default cart.reducer;
