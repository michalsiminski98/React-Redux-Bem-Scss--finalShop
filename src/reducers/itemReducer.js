import * as ActionTypes from "../actions/itemTypes";

const INITIAL_STATES = {
  products: [
    {
      id: 1,
      name: "Premium V-28",
      price: 55,
      img:
        "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9736.png",
      describe: "piekny namiocik, ładny",
    },
    {
      id: 21,
      name: "Premium B-23",
      price: 60,
      img:
        "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/7555.png",
      describe: "piekny namiocik, ładny",
    },
    {
      id: 3,
      name: "Premium VS-2",
      price: 120,
      img:
        "https://rayo4x4.pl/eng_pl_AUTOHOME-ROOF-TENT-AIRTOP-CARBON-3079_11.png",
      describe: "piekny namiocik, ładny",
    },
    {
      id: 4,
      name: "Colorado Baby",
      price: 30,
      img:
        "https://www.checkers.co.za/medias/10122075EA-checkers515Wx515H?context=bWFzdGVyfGltYWdlc3wxODI3MzN8aW1hZ2UvcG5nfGltYWdlcy9oY2IvaDhkLzg4ODEyMTkzMzgyNzAucG5nfGZkNmFjNjYxOGQwOGMxMjdjY2Q0ODdjZDQzMWM0YWQyYmIxMTA5OGY1ZDFmMDk4MjM5MjQzZDk1MTk1Yzc2MDg",
      describe: "piekny namiocik, ładny",
    },
    {
      id: 5,
      name: "Normal-222",
      price: 44,
      img:
        "https://static.zajo.net/content/mediagallery/zajo_dcat/image/product/types/X/9698.png",
      describe: "piekny namiocik, ładny",
    },
    {
      id: 6,
      name: "Lite-1",
      price: 10,
      img:
        "https://elliscanvastents.com/wp-content/uploads/2019/06/shackleton-front_e41d64d7-021a-4dd6-b754-50d9867ac473_1024x1024.png",
      describe: "piekny namiocik, ładny",
    },
  ],
  cart: [],
  currentItem: null,
};

const itemReducer = (state = INITIAL_STATES, action) => {
  switch (action.type) {
    case ActionTypes.ADD:
      // choosing item that we clicked
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // checking if it's in cart already
      const inCart = state.cart.find(
        (product) => product.id === action.payload.id
      );
      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case ActionTypes.REMOVE:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case ActionTypes.ADJUST_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : { ...item }
        ),
      };
    default:
      return state;
  }
};
export default itemReducer;
