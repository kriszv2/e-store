export const CartReducer = (state, action)=>{
    debugger;
    switch (action.type){
        case "ADD":
        case "INCQTY":
            const index = state.cartItems.findIndex(x => x.id === action.payload.id)

            if (index === -1) {
                state.cartItems.push({...action.payload, quantity:1})
            }
            else{
                state.cartItems[index].quantity++
            }
           break;
        
        case "REMOVE": 
            if(index > -1){
                state.cartItems.splice(index, 1)
            }
            break;
        case "DECQTY":
            if(index> -1){
                state.cartItems[index].quantity--
            }
            break;
        case "CLEAR":
            state.cartItems = [];
            break;

        default:
    }
    return state;
}