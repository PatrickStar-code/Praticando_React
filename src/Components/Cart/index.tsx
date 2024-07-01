// components/Cart.tsx
import { useSelector } from 'react-redux'
import { IState } from '../../Store'
import { ICartItem } from '../../Store/modules/cart/types'
import CartProducts from '../Cart_Products'
import React from 'react'

export const Cart: React.FC = () => {
  const cart = useSelector<IState, ICartItem[]>(
    (state) => state.cart.items || [],
  )

  return (
    <div className="max-w-sm border border-gray-600 bg-gray-100 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mt-4 space-y-6">
        <ul className="space-y-4">
          {cart.map((item) => (
            <CartProducts key={item.product.id} item={item} />
          ))}
        </ul>
        <div className="space-y-4 text-center">
          <a
            href="#"
            className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600"
          >
            Checkout
          </a>
        </div>
      </div>
    </div>
  )
}
