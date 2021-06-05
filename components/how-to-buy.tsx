export default function HowToBuy() {

  return (
    <div className="mt-10 mx-10 flex">
      <div className="bg-yellow-100 m-5 p-5 w-1/2 md:w-full rounded-3xl shadow-lg hover:shadow-2xl">
        <div className='text-3xl p-2 font-bold'>How to buy $LCAT</div>
        <div className="pl-2">
          <div>1. Download the app, Trust Wallet. 💸</div>
          <div>2. Purchase BSC using TrustWallet.</div>
          <div>3. </div>
          <div>4. </div>
          <div>5. Once on PancakeSwap, connect your wallet at the top and ensure 'smart chain' is selected by clicking the symbol on the corner of the screen. Then put the amount of BNB you wish to spend in the "From" box.</div>
          <div>6. Change your slippage to 12% and press "Swap"</div>
          <div>7. Confirm the transaction and... HODL 😊</div>
        </div>
      </div>
      <div className="bg-yellow-100 m-5 p-5 w-1/2 md:w-full rounded-3xl shadow-lg hover:shadow-2xl">
        <div className="text-3xl">Contact Address</div>
        <div className="flex">
          <div className="bg-gray-100 rounded-3xl rounded-r-none w-3/4 pl-4 pt-2 pb-2 flex-nowrap overflow-x-scroll">0x70DBd21721cb7D6225ddce8F2D082d7afD26F086</div>
          <button className="bg-yellow-500 w-2/12 rounded-3xl rounded-l-none text-xl font-semibold hover:text-yellow-200" onClick={() => navigator.clipboard.writeText('0x70DBd21721cb7D6225ddce8F2D082d7afD26F086')}>Copy</button>
        </div>
      </div>
      {/* <div className="row-span-2 col-span-2">
          <iframe src="https://www.youtube.com/embed/S65EjtXQwBM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" />
        </div> */}
    </div>
  )
}

