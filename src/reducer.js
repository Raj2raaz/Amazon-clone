export const initialState={
    basket: [],
    // user: null,
};

// Selector
export const getBasketTotal = (basket) => {
    return basket?.reduce((amount, item) => item.price + amount, 0);
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket, action.item],
            };

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if(index >= 0){
                newBasket.splice(index, 1); 
            } else {
                console.warn(
                    `Can't remove product with id ${action.id}. It was not found in the basket`
                )
            }
            return{
                ...state,
                basket: newBasket,
            }

    }
};

export default reducer;