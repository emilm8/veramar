import React from 'react'
import SliderMeasure from '../Main/SliderMeasure'
import { Link } from 'react-router-dom'

function TableMeasure() {
  return (

      <>
      <SliderMeasure/>

      <div className="w-full bg-white py-10 px-4">
      <h2 className="text-center text-3xl font-light mb-8 text-[#4b5943]">
        Table of Measurements
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full max-w-5xl mx-auto border-collapse">
          <thead>
            <tr className="bg-[#6e7b66] text-white">
              <th className="py-3 px-4 text-left">Sizes</th>
              <th className="py-3 px-4 text-left">Bust</th>
              <th className="py-3 px-4 text-left">Waist</th>
              <th className="py-3 px-4 text-left">Hip</th>
              <th className="py-3 px-4 text-left">Brassiere</th>
            </tr>
          </thead>
          <tbody className="text-[#4b5943]">
            <tr className="even:bg-gray-100">
              <td className="py-3 px-4 font-semibold">XS</td>
              <td className="py-3 px-4">85–90</td>
              <td className="py-3 px-4">55–60</td>
              <td className="py-3 px-4">85–90</td>
              <td className="py-3 px-4">32A–34B</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="py-3 px-4 font-semibold">S</td>
              <td className="py-3 px-4">91–95</td>
              <td className="py-3 px-4">61–70</td>
              <td className="py-3 px-4">91–95</td>
              <td className="py-3 px-4">34B–36B</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="py-3 px-4 font-semibold">M</td>
              <td className="py-3 px-4">96–100</td>
              <td className="py-3 px-4">65–75</td>
              <td className="py-3 px-4">96–100</td>
              <td className="py-3 px-4">36B–34C–36C</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="py-3 px-4 font-semibold">L</td>
              <td className="py-3 px-4">101–105</td>
              <td className="py-3 px-4">70–80</td>
              <td className="py-3 px-4">101–105</td>
              <td className="py-3 px-4">38B–36C–38C</td>
            </tr>
            <tr className="even:bg-gray-100">
              <td className="py-3 px-4 font-semibold">XL</td>
              <td className="py-3 px-4">106–115</td>
              <td className="py-3 px-4">75–90</td>
              <td className="py-3 px-4">106–115</td>
              <td className="py-3 px-4">40B–38C–40C</td>
            </tr>
          </tbody>
        </table>
      </div>


      <Link to="/collection">
      <div className="flex justify-center mt-8 ">
        <button className="bg-[#c4b59b] text-[#4b5943] px-6 py-2 rounded shadow hover:bg-[#b3a288] transition cursor-pointer">
          Return to the Store
        </button>
      </div>
    </Link>
     
    </div>
    </>
  
  )
}

export default TableMeasure