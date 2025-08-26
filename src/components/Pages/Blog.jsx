import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
            <div className="relative w-full container mx-auto px-4 max-w-screen-xl h-[600px]">
        <div className="p-4 ">
          <img 
            src="/img/blog1.webp" 
            alt="Background" 
            className="absolute   inset-0 w-full h-full  object-cover"
          />

        </div>

           
          <div className="absolute inset-0 " />

           <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 text-white text-center px-4">
            <h1 className="text-6xl font-light mb-4">Blog</h1>
            <p className="text-lg max-w-3xl">
              ¡Bienvenidos al rincón de la sostenibilidad en el blog de Veramar!<br />
              Aquí exploramos cómo la moda y la responsabilidad ambiental pueden ir de la mano.
            </p>
          </div>
        </div>

              <div className=' w-full container mx-auto mt-10 px-4 max-w-screen-l h-[600px]'>
                <img src="/img/blog2.webp" alt=""  className='h-[350px]  '/>

                <p className='text-[40px] tracking-tighter font-light font-mono mt-10 text-green-600'>Joining forces for cleaner seas: </p>
                <p className='text-[40px]  tracking-tighter text-green-600'>and 4ocean</p>
                <p className='text-gray-400 tracking-tight text-l '>Joining forces for cleaner seas: Veramar and 4ocean At Veramar, we believe that fashion can be a force for good.</p>
                <Link to="/read">
                <p className='underline mt-10 text-shadow-amber-200'>Read more</p>

                </Link>
                
              </div>

    
    </>
  )
}

export default Blog