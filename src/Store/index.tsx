// store/index.ts
import { createStore } from 'redux'
import rootReducer from './modules/rootReducer'
import { ICartState } from './modules/cart/types'

export interface IState {
  cart: ICartState
}

export const store = createStore(rootReducer)
