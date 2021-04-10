import * as ActionTypes from "../actions/itemTypes";

const INITIAL_STATES = {
  products: [{id:1, name: "Tent Premium V-28", price: 30, img: "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9736.png", describe: "piekny namiocik, dupny"}],
  cart:[],
  currentItem: null,
}

const itemReducer = (state=INITIAL_STATES, action) => {
  switch(action.type){
    
    case ActionTypes.ADD:
    // choosing item that we clicked
    const item = state.products.find(product => product.id === action.payload.id)
    // checking if it's in cart already
    const inCart = state.cart.find(product => product.id === action.payload.id)
    return{
      ...state,
      cart: inCart ? 
      state.cart.map(item => item.id === action.payload.id ? 
      {...item, qty: item.qty+1}: item) :
      [...state.cart, {...item, qty: 1}]
    }
    default:
      console.log(`Wrong action ${action.type}`);
      return state;
  }
}
export default itemReducer;