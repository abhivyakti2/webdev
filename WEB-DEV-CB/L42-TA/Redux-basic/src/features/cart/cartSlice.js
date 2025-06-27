import { createSlice } from '@reduxjs/toolkit'
// import type { PayloadAction } from '@reduxjs/toolkit'


export const cartSlice = createSlice({
  name: 'cart',
  initialState : [],
  reducers: { //functionalities
   addToCart : (state, action) =>{
       const item = state.items.find(i=> i.id===action.payload.id)
       if(item){
        item.quantity+=1
       }else{
        state.items.push({...action.payload, quantity:1})
       }
   },
   removeFromCart : (state,action)=>{
    state.items = state.items.filter(item=> item.id!==action.payload);
   }
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default {cartReducer} = cartSlice.reducer