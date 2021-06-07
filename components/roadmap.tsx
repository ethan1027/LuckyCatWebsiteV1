const Roadmap = () => (
  <div className="container mx-auto w-full h-full py-12 lg:py-24" id="user-roadmap">
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
        <h2 className="text-3xl font-extrabold tracking-tight text-center sm:text-4xl">Our roadmap</h2>
      </div>
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: "50%" }}></div>
      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 bg-yellow-400 flex items-center order-1 shadow w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg">&nbsp;</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow w-5/12 px-6 py-4 shadow-2xl transition duration-500 ease-in-out hover:shadow-yellow transform hover:-translate-y-2 hover:scale-105">
          <h3 className="mb-3 font-bold text-2xl">Q2 2021</h3>
          <p className="text-xl font-medium leading-snug tracking-wide text-gray-900 text-opacity-100">😊 $HAPPY Launch ✅</p>
        </div>
      </div>

      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 bg-yellow-400 flex items-center order-1 shadow w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg">&nbsp;</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow w-5/12 px-6 py-4 shadow-2xl transition duration-500 ease-in-out hover:shadow-yellow transform hover:-translate-y-2 hover:scale-105">
          <h3 className="mb-3 font-bold text-2xl">Q3 2021</h3>
          <p className="text-xl font-medium leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <div className="mb-8 flex justify-between items-center w-full right-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 bg-yellow-400 flex items-center order-1 shadow w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg">&nbsp;</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow w-5/12 px-6 py-4 shadow-2xl transition duration-500 ease-in-out hover:shadow-yellow transform hover:-translate-y-2 hover:scale-105">
          <h3 className="mb-3 font-bold text-2xl">Q4 2021</h3>
          <p className="text-xl font-medium leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>

      <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
        <div className="order-1 w-5/12"></div>
        <div className="z-20 bg-yellow-400 flex items-center order-1 shadow w-8 h-8 rounded-full">
          <h1 className="mx-auto font-semibold text-lg">&nbsp;</h1>
        </div>
        <div className="order-1 bg-white rounded-lg shadow w-5/12 px-6 py-4 shadow-2xl transition duration-500 ease-in-out hover:shadow-yellow transform hover:-translate-y-2 hover:scale-105">
          <h3 className="mb-3 font-bold text-2xl">Q1 2022</h3>
          <p className="text-xl font-medium leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
      </div>
    </div>
  </div>
)

export default Roadmap