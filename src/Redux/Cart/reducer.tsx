import CartActionType from './action-type'

interface ProductProps {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

const initialState: ProductProps[] = []
const CartReducer = (state = initialState, action) => {
  switch (action.type) {
    case CartActionType.ADD_TO_CART:
      return [...state, action.payload]
    default:
      return state
  }
}

export default CartReducer
