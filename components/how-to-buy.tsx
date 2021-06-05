export default function HowToBuy() {

  return (
    <div className="container mx-auto mt-10 h-auto flex lg:flex-row md:flex-column justify-center">
      <div className="bg-yellow-100 mx-5 p-5 lg:w-1/2 md:w-full rounded-3xl shadow-lg hover:shadow-2xl pl-4 ">
        <div className='text-3xl font-bold'>how to buy $LCAT</div>
        <div>1. Download the app, Trust Wallet. 💸</div>
        <div>2. Purchase BNB or BSC using TrustWallet.</div>
        <div>3. </div>
        <div>4. </div>
        <div>5. Once on PancakeSwap, connect your wallet at the top and ensure 'smart chain' is selected by clicking the symbol on the corner of the screen. Then put the amount of BNB you wish to spend in the "From" box.</div>
        <div>6. Change your slippage to 12% and press "Swap"</div>
        <div>7. Confirm the transaction and... HODL 😊</div>
      </div>
      <div className="lg:w-1/2 md:w-full mx-5 h-auto rounded-4xl space-y-4">
        <div className="bg-yellow-100 w-full h-1/4 rounded-3xl shadow-lg hover:shadow-2xl pl-4 pt-6 ">
          <div className="text-3xl">Contact Address</div>
          <div className="flex space-x-0">
            <div className="bg-gray-100 rounded-3xl rounded-r-none w-3/4 text-xl pl-4 pt-2 pb-2 flex-nowrap overflow-x-scroll">0x70DBd21721cb7D6225ddce8F2D082d7afD26F086</div>
            <button className="bg-yellow-500 w-2/12 rounded-3xl rounded-l-none text-xl font-semibold hover:text-yellow-200" onClick={() => navigator.clipboard.writeText('0x70DBd21721cb7D6225ddce8F2D082d7afD26F086')}>Copy</button>
          </div>
        </div>
        <div>
          <iframe src="https://www.youtube.com/embed/S65EjtXQwBM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
        </div>
      </div>
    </div>
  )
}

