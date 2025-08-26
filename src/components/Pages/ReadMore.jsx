import React from 'react'

function ReadMore() {
  return (
   <>
   <div className='w-full container mx-auto px-4 max-w-screen-xl h-[full]'>
    <img src="/img/trash.webp" alt="" />

    <p className='text-[40px] tracking-tighter font-light font-mono mt-10 text-[#748370]'>Joining forces for cleaner seas: Veramar and 4ocean</p>

    <p className='mt-6 text-gray-400 tracking-wider text-[17px] '>At Veramar, we believe that fashion can be a force for good. We're not only passionate about creating swimwear that makes you feel amazing, but we're also committed to protecting the natural beauty that inspires us: our oceans. That's why sustainability is at the heart of everything we do, from choosing recycled materials to creating our "Veramar por el Mar" movement, which unites volunteers to clean the beaches of El Paredón.

        But we know we can't do it alone. The fight against plastic pollution requires a collaborative effort, which is why we're proud to join forces with 4ocean, a global organization that shares our passion for ocean conservation.

        4ocean, founded in 2017 by Alex Schulze and Andrew Cooper, was born from a powerful experience: a surf trip to Bali where, instead of perfect waves, they found an ocean awash in plastic. Since then, their mission has been clear: to clean the world's oceans and coastlines, one kilogram of trash at a time.</p>

      <p className='mt-5 font-bold text-gray-500'>Veramar and 4ocean: an alliance for sustainability</p>

            <p className='mt-5 text-gray-400  text-[17px]'>The collaboration between Veramar and 4ocean is a natural union of two organizations that share core values: ocean protection, reducing plastic waste, and promoting the circular economy. While Veramar transforms collected plastic bottles in Guatemala into beautiful swimsuits, 4ocean carries out massive cleanups in oceans, rivers, and coastlines around the world.

        Together, we amplify our impact by combining the creation of sustainable products with direct cleanup action. This partnership allows us not only to reduce the amount of plastic entering our oceans, but also to raise awareness about the importance of individual and collective responsibility in protecting the environment.  
        </p>

        <p className='mt-5 font-bold text-gray-500'>The impact of collaboration in Guatemala</p>

        <p className='mt-6 text-gray-400  text-[17px]'>Our collaboration with 4ocean extends to the beaches of El Paredón, where our "Veramar por el Mar" movement comes to life. Together, we organize cleanup events that bring together volunteers passionate about preserving Guatemala's natural beauty.</p>

        <ul className='mt-4'>
          <li className='ml-10 list-disc text-gray-400 text-[17px]'>Joint cleanup efforts have helped collect large amounts of plastic waste and other pollutants that threaten marine life and the coastal ecosystem.</li>
          <li className='ml-10 list-disc text-gray-400 text-[17px]'>4ocean's presence in Guatemala, with its experience and resources, strengthens our local efforts and allows us to achieve greater impact.</li>
          <li className='ml-10 list-disc text-gray-400 text-[17px]'>The collaboration raises awareness of the problem of plastic pollution in local communities, inspiring more people to join the movement for a cleaner ocean.</li>
        </ul>

        <p className='mt-5 text-gray-400  text-[17px]'>“4ocean has recovered hundreds of thousands of pounds of trash from El Paredón this year alone. With a team dedicated to a cleaner ocean, anything is possible.” </p>

        <p className='mt-5 font-bold text-gray-500'>How you can join the movement</p>

        <p className='mt-5 text-gray-400  text-[17px'>Protecting our oceans is a shared responsibility. You too can be part of the change and join the movement for a more sustainable future. Here's how:</p>

        <ul>
          <li className='ml-10 list-disc   mt-2 text-gray-400 text-[17px]'><p className='font-bold text-gray-500'>Participate in our cleanup events:</p> <span>Stay tuned to our social media channels for dates and locations of upcoming cleanup events in El Paredón. Your help is invaluable!</span></li>
          <li className='ml-10 list-disc   mt-2 text-gray-400 text-[17px]'><p className='font-bold text-gray-500'>Support Veramar:</p><span>By purchasing our swimsuits, you not only look good, but you also contribute to reducing plastic waste and empowering women in Guatemala.</span></li>
          <li className='ml-10 list-disc   mt-2 text-gray-400 text-[17px]'><p className='font-bold text-gray-500'>Learn more about 4ocean:</p> <span>Visit their website and find out how you can support their global ocean cleanup mission. You can join their cleanups, purchase their products, or make a donation.</span></li>
          <li className='ml-10 list-disc   mt-2 text-gray-400 text-[17px]'><p className='font-bold text-gray-500'>Adopt responsible consumption habits:  </p><span>Reduce your plastic consumption, reuse, and recycle whenever possible. Small changes in your daily life can make a big impact.</span></li>
        </ul>
   </div>

   <div class="max-w-2xl mx-auto p-6">
  <h2 class="text-2xl font-light mb-4">Leave a reply</h2>
  <p class="text-gray-700 mb-6">
    Your email address will not be published. Required fields are marked <span class="text-red-500">*</span>
  </p>

  <form class="space-y-4">
    <div>
      <label for="comment" class="block text-sm font-semibold text-gray-600 mb-1">
        Comment <span class="text-red-500">*</span>
      </label>
      <textarea id="comment" rows="6" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-gray-500"></textarea>
    </div>

    <div>
      <label for="name" class="block text-sm font-semibold text-gray-600 mb-1">
        Name <span class="text-red-500">*</span>
      </label>
      <input type="text" id="name" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-gray-500"/>
    </div>

    <div>
      <label for="email" class="block text-sm font-semibold text-gray-600 mb-1">
        Email <span class="text-red-500">*</span>
      </label>
      <input type="email" id="email" class="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring focus:border-gray-500"/>
    </div>

    <div class="flex items-center">
      <input type="checkbox" id="save" class="mr-2"/>
      <label for="save" class="text-sm text-gray-600">
        Save my name, email, and website in this browser for the next time I comment.
      </label>
    </div>

    <div>
      <button type="submit" class="bg-[#d2c4aa] text-black font-semibold px-4 py-2 rounded hover:bg-[#c5b897] transition">
        Post the comment
      </button>
    </div>
  </form>
</div>

   </>
  )
}

export default ReadMore