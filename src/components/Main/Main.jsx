import React from 'react'
import AdsSlider from './AdsSlider'
import PopCard from './PopCard';
import { Link } from 'react-router-dom';


function Main() {
  return (
   <>

   <AdsSlider/>

   <div className="relative z-10 mt-60 text-center px-4">
  <div className="flex justify-center mb-6">
    <h1 className="bg-[#D7CBB2] px-6 py-2 text-2xl md:text-5xl font-light font-mono tracking-widest frunchy ">
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



     <div className='mt-20'>
      <video className="w-3/4 mx-auto rounded-lg" controls>
  <source src="https://veramar.gt/wp-content/uploads/2024/10/Veramar-Institucional-720-Made-with-Clipchamp.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

     </div>




      <div className="mt-10 px-4 max-w-7xl mx-auto">
  <div className="flex justify-center mb-6">
    <h1 className="bg-[#D7CBB2] px-6 py-2 text-2xl md:text-5xl font-light font-mono tracking-widest frunchy">
      Our Pillars
    </h1>
  </div>

  <div className="flex flex-col md:flex-row gap-8 md:gap-6 justify-center">

    <div className="flex-1 text-center">
      <img
        src="/img/bottle.webp"
        alt="Ecology"
        className="mx-auto rounded-lg w-full max-w-sm object-cover"
      />
      <h2 className="mt-4 text-5xl font-serif text-[#748371] frunchy">Ecology</h2>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
        Veramar doesn't just make swimwear, it does so with a deep ecological
        conscience. Aware of the environmental impact caused by plastic, we
        decided to turn a problem into a solution.
      </p>
    </div>


    <div className="flex-1 text-center">
      <img
        src="/img/people.webp"
        alt="Social Responsibility"
        className="mx-auto rounded-lg w-full max-w-sm object-cover"
      />
      <h2 className="mt-4 text-5xl  font-sans text-[#748371] frunchy ">Social Responsibility</h2>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
        Mi eelo is much more than an organization; it's a driving force for
        social change dedicated to empowering women at risk, providing them
        not only with decent work but also the opportunity to transform their
        lives.
      </p>
    </div>


    <div className="flex-1 text-center">
      <img
        src="/img/chicks.webp"
        alt="Women for Women"
        className="mx-auto rounded-lg w-full max-w-sm object-cover"
      />
      <h2 className="mt-4 text-5xl font-serif text-[#748371] frunchy">Women for Women</h2>
      <p className="mt-2 text-gray-600 text-sm md:text-base">
        Created by talented and passionate women, our products are designed
        with diversity and inclusion in mind, so every woman feels confident,
        comfortable, and beautiful in her own skin.
      </p>
    </div>
  </div>
</div>




    

        <div className='flex max-w-6xl mx-auto'>
          
           <PopCard/>
        </div>

          <Link to="/collection">
          
        <span className='bg-[#D7CBB2] flex justify-center max-w-[200px] mx-auto mb-10 mt-5 px-4 sm:px-6 py-2 sm:py-2 rounded-md cursor-pointer hover:bg-amber-600 transition-colors text-xs sm:text-sm font-medium'>See Store</span>
          </Link>
      






   </>
  )
}

export default Main