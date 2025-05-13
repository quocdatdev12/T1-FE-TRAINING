import React from 'react'
import img_collection from "../../assets/images/img_collection.jpg"
import img_collection2 from "../../assets/images/img_collection2.webp"
import img_collection3 from "../../assets/images/img_collection3.webp"
import { BoxCategories } from './BoxCategories'

export const Categories = () => {
  return (
    <section className="mt-8 lg:mt-24">
          <div className="container">
            <div className="lg:flex justify-between items-center">
              <h2 className="text-3xl font-bold">Our Categories</h2>
              <a href="#none" className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">View All</a>
            </div>

            <ul className="mt-10 md:grid grid-cols-3 gap-10 cursor-pointer">
              {/* <li>
                <div className="rounded-[20px] overflow-hidden relative group">
                  <img className="image" src={img_collection} alt=""/>
                  <a href="#none" className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">Living Room</a>
                </div>
              </li>
              <li className="mt-6 md:mt-0">
                <div className="rounded-[20px] overflow-hidden relative group">
                  <img className="image" src={img_collection2} alt=""/>
                  <a href="#none" className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">Lamp</a>
                </div>
              </li>
              <li className="mt-6 md:mt-0">
                <div className="rounded-[20px] overflow-hidden relative group">
                  <img className="image" src={img_collection3} alt=""/>
                  <a href="#none" className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">Deco</a>
                </div>
              </li> */}
              <BoxCategories img={img_collection} title={"Living Room"} />
              <BoxCategories img={img_collection2} title={"Lamp"} />
              <BoxCategories img={img_collection3} title={"Deco"} />
            </ul>
          </div>
        </section>
  )
}
