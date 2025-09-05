import React from 'react'
import { Link } from 'react-router-dom'

function Blog() {
  return (
    <>
       <div className="relative w-full container mx-auto px-4 max-w-screen-xl h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
        <div className="p-4">
          <img 
            src="/img/blog1.webp" 
            alt="Background" 
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white text-center px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">Blog</h1>
          <p className="text-sm sm:text-base md:text-lg max-w-3xl">
            ¡Bienvenidos al rincón de la sostenibilidad en el blog de Veramar!<br />
            Aquí exploramos cómo la moda y la responsabilidad ambiental pueden ir de la mano.
          </p>
        </div>
      </div>

       <div className="w-full container mx-auto mt-10 px-4 max-w-screen-lg">
        <img 
          src="/img/blog2.webp" 
          alt=""  
          className="h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full object-cover rounded-xl"
        />

        <p className="text-2xl sm:text-3xl md:text-4xl tracking-tighter font-light font-mono mt-6 text-green-600">
          Joining forces for cleaner seas:
        </p>
        <p className="text-2xl sm:text-3xl md:text-4xl tracking-tighter text-green-600">
          Veramar and 4ocean
        </p>

        <p  className="text-gray-400 frunchy tracking-wide text-sm sm:text-base mt-4">
          Joining forces for cleaner seas: Veramar and 4ocean.  
          At Veramar, we believe that fashion can be a force for good.
        </p>

        <Link to="/read">
          <p className="underline mt-6 italic sm:mt-8 hover:text-green-700 transition">
            Read more
          </p>
        </Link>
      </div>
    </>
  )
}

export default Blog
