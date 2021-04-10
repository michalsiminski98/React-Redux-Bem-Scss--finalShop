import * as ActionType from "./itemTypes";

export const addToCart = itemID => ({
  type:ActionType.ADD,
  payload:{
    id: itemID,
  }
})