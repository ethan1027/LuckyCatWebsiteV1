// import { useEffect, useState } from 'react'

// const apiKey = 'MI5KAA51ZQC5HIMTUK824ZAWX8EKC8D36P'
// const address = '0x70DBd21721cb7D6225ddce8F2D082d7afD26F086'

export default function Stats() {
  // const [holders, setHolders] = useState(0)
  // const [price, setPrice] = useState(0.0)

  // useEffect(() => {
  //     fetch(`https://api.bscscan.com/api?module=token&action=tokenholderlist&contractaddress=${address}&page=1&offset=10000&apikey=${apiKey}`)
  //     .then(res => setHolders(res))
  //     fetch(`https://api.pancakeswap.info/api/v2/tokens/${address}`)
  //     .then(res => setHolders(res.))
  // }, [])

  return (
    <div className="bg-gray-50 pt-12 sm:pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by dimamond hands from over 80 planets
          </h2>
          <p className="mt-3 text-xl text-gray-500 sm:mt-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus repellat laudantium.
          </p>
        </div>
      </div>
      <div className="mt-10 pb-12 bg-white sm:pb-16">
        <div className="relative">
          <div className="absolute inset-0 h-1/2 bg-gray-50" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Coin Price</dt>
                  <dd className="order-1 text-3xl font-extrabold text-indigo-600">0.000000000027</dd>
                </div>
                <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Holders</dt>
                  <dd className="order-1 text-3xl font-extrabold text-indigo-600">3000</dd>
                </div>
                <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                  <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">Market Cap</dt>
                  <dd className="order-1 text-3xl font-extrabold text-indigo-600">1,000,000,000</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}