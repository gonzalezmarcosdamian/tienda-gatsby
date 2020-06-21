import React from "react"
import Price from "./Price"
import CheckoutTemp from "./CheckoutTemp"

export default ({ prices, product }) => {
  //console.log(product)

  const price = prices[0]
  //console.log(price)
  return (
    <article className="card">
      <header className="bg-blue-800 p-6 text-center">
        <div className="flex text-left">
          <div className="flex-1">
            {product && product.images && (
              <>
                <img alt={product.name} src={product.images} />
              </>
            )}
          </div>
          <div className="flex-1 px-6">
            <p className="text-blue-300">Precio</p>
            <Price {...price} className="text-2xl" />
          </div>
        </div>
      </header>
      <div className="text-center p-6">
        <h1 className="text-3xl uppercase mb-3">{product.name}</h1>
        <CheckoutTemp price={price} />
      </div>
    </article>
  )
}
