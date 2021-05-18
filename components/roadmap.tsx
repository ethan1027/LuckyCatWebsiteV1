import Intro from './intro'

export default function Roadmap() {
  const borderStyle ={'left': '50%', 'border': '2px solid', 'border-radius': '1%'}
  return (
    <section>
      <div className="container mx-auto flex flex-col items-start md:flex-row md:my-24">
        <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
          <Intro/>
          <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">Roadmap To The Moon</p>
          <p className="text-sm md:text-base mb-4">
            Here’s our commitment in 2021 and beyond. We are an ambitious team with an ambitious goal.
          </p>
          <a href="#"
          className="bg-transparent mr-auto hover:bg-yellow-300 hover:text-yellow-800 hover:bg-opacity-50 rounded py-2 px-4 transition delay-300 duration-100 ease-in">
          Buy Now</a>
        </div>
        <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
          <div className="container mx-auto w-full h-full">
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2 absolute h-full bg-gray-600 bg-opacity-50 border-transparent" style={borderStyle}/>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Q2, 2021</h4>
                  <p className="text-sm md:text-base leading-snug">
                    Pick your favourite event(s) and register in that event by filling the form corresponding to that
                    event. Its that easy :)
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1  w-5/12 px-1 py-4 text-left">
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Q3, 2021</h4>
                  <p className="text-sm md:text-base leading-snug">
                    Participate online. The links for your registered events will be sent to you via email and whatsapp
                    groups. Use those links and show your talent.
                  </p>
                </div>
              </div>
              <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                <div className="order-1 w-5/12"></div>
                <div className="order-1 w-5/12 px-1 py-4 text-right">
                  <h4 className="mb-3 font-bold text-lg md:text-2xl">Q4, 2021</h4>
                  <p className="text-sm md:text-base leading-snug">
                    The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be
                    announced on the whatsapp groups and will be mailed to you.
                  </p>
                </div>
              </div>

              <div className="mb-8 flex justify-between items-center w-full right-timeline">
                <div className="order-1 w-5/12"></div>

                <div className="order-1  w-5/12 px-1 py-4">
                  <h4 className="mb-3 font-bold  text-lg md:text-2xl text-left">Q1, 2022</h4>
                  <p className="text-sm md:text-base leading-snug">
                    The winners will be contacted by our team for their addresses and the winning goodies will be sent at
                    their addresses.
                  </p>
                </div>
              </div>
            </div>
            <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
          </div>
        </div>
      </div>
  </section>
  )
}