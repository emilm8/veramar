import React from 'react'
import AdsSlider from './AdsSlider'
import PopCard from './PopCard';



function Main() {
  return (
   <>

   <AdsSlider/>

        <div className="mt-10 text-center px-4">

        <div className="flex justify-center mb-6">
          <h1 className="bg-[#D7CBB2] px-6 py-2 text-xl md:text-3xl font-light font-mono tracking-widest">
            Discover Veramar
          </h1>
        </div>

        <div className="flex justify-center">
          <h3 className="max-w-4xl text-gray-400 text-[15px] font-mono leading-relaxed tracking-wide">
            We are an eco-friendly brand committed to environmental preservation and
            social responsibility. Designed by women for women, we celebrate diversity
            and feminine strength.
          </h3>
        </div>
      </div>


          <div>
                <video width="70%" className='mt-10 mx-auto' controls>
              <source src="/video/veramarVideo.mp4" type="video/mp4" />
                </video>
          </div>

              <div className='mt-10 text-center px-4'>
              <div className="flex justify-center mb-6">
              <h1 className="bg-[#D7CBB2] px-6 py-2 text-xl md:text-3xl font-light font-mono tracking-widest">
              Our Pillars
              </h1>
            </div>
              </div>


           
      <div className='flex gap-4 mx-auto justify-center'>

          <div className="max-w-sm rounded-3xl    ">
        <a href="#">
            <img className="rounded-lg" src="/img/bottle.webp" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h1 className="mb-2 font-serif text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Ecology</h1>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 font-serif">Veramar doesn't just make swimwear, it does so with a deep ecological conscience. Aware of the environmental impact caused by plastic, we decided to turn a problem into a solution.</p>
        </div>
          </div>

          <div className="max-w-sm rounded-3xl    ">
        <a href="#">
            <img className="rounded-lg" src="/img/people.webp" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h1 className="mb-2 font-serif text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Social Responsibility</h1>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Mi eelo is much more than an organization; it's a driving force for social change dedicated to empowering women at risk, providing them not only with decent work but also the opportunity to transform their lives.</p>
        </div>
          </div>

          <div className="max-w-sm rounded-3xl    ">
        <a href="#">
            <img className="rounded-lg" src="/img/chicks.webp" alt="" />
        </a>
        <div className="p-5">
            <a href="#">
                <h1 className="mb-2 font-serif text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-black">Ecology</h1>
            </a>
            <p className="mb-3 font-serif text-gray-700 dark:text-gray-400">Veramar doesn't just make swimwear, it does so with a deep ecological conscience. Aware of the environmental impact caused by plastic, we decided to turn a problem into a solution.</p>
        </div>
          </div>
        

      </div>


      <div className='mt-10 text-center px-4'>
              <div className="flex justify-center mb-6">
                  <h1 className="bg-[#D7CBB2] px-6 py-2 text-xl md:text-3xl font-light font-mono tracking-widest">
                  Seasonal Offers
                  </h1>
             </div>
      </div>




    

        <div className='flex max-w-6xl mx-auto'>

           <PopCard/>
       

        
     
        </div>
      






   </>
  )
}

export default Main