import * as ActionType from "./itemTypes";

export const addToCart = itemID => ({
  type:ActionType.ADD,
  payload:{
    id: itemID,
  }
})
export const removeFromCart = itemID => ({
  type:ActionType.REMOVE,
  payload:{
    id: itemID,
  }
})
export const adjustQty = (itemID, value) => ({
  type:ActionType.ADJUST_QTY,
  payload:{
    id: itemID,
    qty: value
  }
})