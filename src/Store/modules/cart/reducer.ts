import { Reducer } from 'redux'
import { ICartState } from './types'
import { produce } from 'immer'

const INITIAL_STATE: ICartState = {
  items: [],
}

const cartReducer: Reducer<ICartState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT_TO_CART': {
      const { product } = action.payload

      return produce(state, (draft) => {
        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        )

        if (productIndex >= 0) {
          draft.items[productIndex].quantity++
        } else {
          draft.items.push({ product, quantity: 1 })
        }
      })
    }
    case 'REMOVE_PRODUCT_TO_CART': {
      const { product } = action.payload

      return produce(state, (draft) => {
        const productIndex = draft.items.findIndex(
          (item) => item.product.id === product.id,
        )

        if (draft.items[productIndex].quantity > 1) {
          draft.items[productIndex].quantity--
        } else {
          draft.items.splice(productIndex, 1)
        }
      })
    }
    default:
      return state
  }
  return INITIAL_STATE
}

export default cartReducer
