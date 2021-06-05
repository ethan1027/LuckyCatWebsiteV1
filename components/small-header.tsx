import styled from 'styled-components'
export default function SmallHeader() {
  return (
  <div className=" w-full h-auto flex justify-center ">
      <div className="bg-yellow-100 opacity-90 w-5/12 rounded-3xl shadow-lg hover:shadow-2xl pl-4 ">
          <div className='text-3xl font-nuni font-extrabold my-6'>how to buy $lucky cat</div>
          <div className='text-xl mb-8'>1</div>
          <div className='text-xl mb-8'>2</div>
          <div className='text-xl mb-8'>3</div>
          <div className='text-xl mb-8'>4</div>
          <div className='text-xl mb-8'>5</div>
          <div className='text-xl mb-8'>6</div>
          <div className='text-xl mb-8'>7</div>
          
      </div>
      <div className="w-5/12 h-auto rounded-4xl mx-14 space-y-4 ">
          <div className ="bg-yellow-100 bg-opacity-90 w-full h-1/4 rounded-3xl shadow-lg hover:shadow-2xl pl-4 pt-6 ">
              <div className="text-3xl font-nuni font-extrabold">contact address</div>
              <div className="flex space-x-0">
                  <div className="bg-gray-100 rounded-3xl rounded-r-none w-3/4 text-xl pl-4 pt-2 pb-2 font-nuni"> 0x70DBd21721cb7D6225ddce8F2D082d7afD26F086 </div>
                  <button className="bg-yellow-500 w-2/12 rounded-3xl rounded-l-none text-xl font-nuni font-semibold hover:text-yellow-200" onClick={() => navigator.clipboard.writeText('0x70DBd21721cb7D6225ddce8F2D082d7afD26F086')}>Copy</button>
              </div>
          </div>
          <iframe width="800" height="345" className="hover:shadow-2xl" src="https://www.youtube.com/embed/4iR-ryO1GgI"></iframe>
     </div>
  </div>
  )
}

