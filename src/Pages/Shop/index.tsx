import { Products } from './Products'
import { IProduct } from '../../Store/modules/cart/types'
import ProductCard from '../../Components/Product_Card'
import { Cart } from '../../Components/Cart'

export default function Shop() {
  const catalog: IProduct[] = Products
  return (
    <main className="flex  flex-row justify-between">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {catalog.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Cart />
    </main>
  )
}
