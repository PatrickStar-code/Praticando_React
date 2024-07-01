import { IProduct } from '../../Store/modules/cart/types'
import { useFormater } from '../../hooks/useformater'
import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { addProductToCart } from '../../Store/modules/cart/actions'

export default function ProductCard({ product }: { product: IProduct }) {
  const dispath = useDispatch()

  const handleAddProductToCart = useCallback(
    (product: IProduct) => {
      dispath(addProductToCart(product))
    },
    [dispath],
  )
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="relative overflow-hidden">
        <img
          className="object-cover w-full h-full rounded-lg"
          src={product.image}
          alt="Product"
        />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mt-4">{product.title}</h3>

      <div className="flex items-center justify-between mt-4 gap-2">
        <span className="text-gray-900 font-bold text-lg">
          {useFormater(product.price)}
        </span>
        <button
          className="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800"
          onClick={() => handleAddProductToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  )
}
