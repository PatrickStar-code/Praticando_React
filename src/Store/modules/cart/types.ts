// store/modules/cart/types.ts
export interface IProduct {
  id: number
  title: string
  price: number
  image: string
}

export interface ICartItem {
  product: IProduct
  quantity: number
}

export interface ICartState {
  items: ICartItem[]
}
