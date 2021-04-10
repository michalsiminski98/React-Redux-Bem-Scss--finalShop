import * as ActionType from "./itemTypes";

export const addToCart = itemID => ({
  type:ActionType.ADD,
  payload:{
    id: itemID,
  }
})
export const RemoveFromCart = itemID => ({
  type:ActionType.REMOVE,
  payload:{
    id: itemID,
  }
})
export const AdjustQty = (itemID, value) => ({
  type:ActionType.ADJUST_QTY,
  payload:{
    id: itemID,
    qty: value
  }
})