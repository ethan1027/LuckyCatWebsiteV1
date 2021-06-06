export default function HowToBuy() {

  return (
  <div className="mt-10 ">
    <div className ="md:flex md:mx-10" >
      <div className="m-5 p-5 bg-yellow-400 rounded-3xl md:w-full shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <div className='p-2 text-3xl font-bold'>How to buy $LCAT</div>
            <div className="p-2">
              <div className="mb-4">1. Download the app, Trust Wallet. 💸</div>
              <div className="mb-4">2. Purchase BSC using TrustWallet.</div>
              <div className="mb-4">3. </div>
              <div className="mb-4">4. </div>
              <div className="mb-4">5. Once on PancakeSwap, connect your wallet at the top and ensure 'smart chain' is selected by clicking the symbol on the corner of the screen. Then put the amount of BNB you wish to spend in the "From" box.</div>
              <div className="mb-4">6. Change your slippage to 12% and press "Swap"</div>
              <div className="mb-4">7. Confirm the transaction and... HODL 😊</div>
          </div>
      </div>
      <div className=" m-5 md:w-full ">
        <div className=" mb-5 p-5 w-full bg-yellow-400 rounded-3xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out">
          <div className="mb-4 text-xl text-center md:text-3xl md:text-left ">Contract Address</div>
          <div className="m-auto md:flex ">
              <div className="w-full bg-gray-100 rounded-3xl rounded-b-none flex-nowrap overflow-x-auto md:rounded-r-none md:rounded-l-3xl ">
                <p className="m-4">0x70DBd21721cb7D6225ddce8F2D082d7afD26F086</p>
              </div>
              <button className="w-full bg-gray-200 rounded-3xl rounded-t-none text-xl font-semibold md:w-32 md:rounded-l-none md:rounded-r-3xl hover:text-yellow-400" onClick={() => navigator.clipboard.writeText('0x70DBd21721cb7D6225ddce8F2D082d7afD26F086')}>
                <p className="m-4">Copy</p>
              </button>
            </div>
        </div>
        <div className="iframe-container ">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/S65EjtXQwBM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
      </div>
    </div>
  </div>
    
  )
}

