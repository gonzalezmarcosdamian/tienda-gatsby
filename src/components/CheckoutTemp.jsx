import React, { useEffect, useState } from "react"

export default ({ price }) => {
  //console.log(price)

  const [stripe, setStripe] = useState({})

  useEffect(() => {
    setStripe(window.Stripe(process.env.STRIPE_PUBLIC_KEY))
  }, [])

  const redirectToCheckout = async e => {
    const response = await stripe.redirectToCheckout({
      lineItems: [{ price: `${price.id}`, quantity: 1 }],
      mode: "payment",
      successUrl: `http://localhost:8000/completado`,
      cancelUrl: `http://localhost:8000`,
    })
    if (response.error) {
      console.log(response.error)
    }
  }
  return (
    <button onClick={redirectToCheckout} className="app-btn text-xl">
      Checkout
    </button>
  )
}
