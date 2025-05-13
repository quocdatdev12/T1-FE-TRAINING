import React from 'react'
import ico_heart from "../assets/images/ico_heart.png"
import ico_reload from "../assets/images/ico_reload.png"
import ico_search from "../assets/images/ico_search.png"
import ico_star_active from "../assets/images/ico_star_active.png"
import ico_star_gray from "../assets/images/ico_star_gray.png"
import img_product from "../assets/images/img_product.webp"
import img_product2 from "../assets/images/img_product2.webp"
import img_product3 from "../assets/images/img_product3.webp"
import img_product4 from "../assets/images/img_product4.webp"


export const Bestseller = () => {
  return (
    <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
          <div className="container">
            <div className="lg:flex justify-between items-end">
              <div>
                <h2 className="text-3xl font-bold">Bestseller</h2>
                <p className="mt-2 text-lightGray">Experience the best products at our store!</p>
              </div>
              <a href="#none" className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300">View All</a>
            </div>

            <ul className="mt-8 lg:grid grid-cols-4 gap-7">
              <li className="mt-6 md:mt-0 text-center group relative">
                <a href="product-detail.html" className="bg-red">
                  <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">Out of stock</span>
                  <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_heart} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_reload} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_search} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                  </ul>

                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className="block size-full object-cover" src={img_product} alt=""/>
                  </div>
                  <div className="flex justify-center items-center gap-1 mt-5">
                    <img className="size-13 inline-block" src={ico_star_active} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                  </div>
                  <h3 className="text-15 mt-2">Egg Dining Table</h3>
                  </a><div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html" className="bg-red">
                    </a><div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300"><a href="product-detail.html" className="bg-red">
                      <div className="flex items-center justify-center font-bold text-15 text-center">
                        <span className="">$70.00</span>
                      </div>
                      </a><a href="#none" className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">Add to cart</a>
                    </div>
                  </div>
                
              </li>

              <li className="mt-6 md:mt-0 text-center group relative">
                <a href="product-detail.html">
                  <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_heart} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_reload} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_search} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                  </ul>
                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className="block size-full object-cover" src={img_product2} alt=""/>
                  </div>
                  <div className="flex justify-center items-center gap-1 mt-5">
                    <img className="size-13 inline-block" src={ico_star_active} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                  </div>
                  <h3 className="text-15 mt-2">Century Starburst Clock</h3>
                  </a><div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html">
                    </a><div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300"><a href="product-detail.html">
                      <div className="flex items-center justify-center font-bold text-15 text-center">
                        <span className="">$55.00</span>
                      </div>
                      </a><a href="#none" className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">Add to cart</a>
                    </div>
                  </div>
                
              </li>

              <li className="mt-6 md:mt-0 text-center group relative">
                <a href="product-detail.html">
                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className="block size-full object-cover" src={img_product3} alt=""/>
                  </div>
                  <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_heart} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_reload} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_search} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                  </ul>
                  <div className="flex justify-center items-center gap-1 mt-5">
                    <img className="size-13 inline-block" src={ico_star_active} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                  </div>
                  <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
                  </a><div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html">
                    </a><div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300"><a href="product-detail.html">
                      <div className="flex items-center justify-center font-bold text-15 text-center">
                        <span className="">$59.00</span> -
                        <span className="">$60.00</span>
                      </div>
                      </a><a href="#none" className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">Add to cart</a>
                    </div>
                  </div>
                
              </li>

              <li className="mt-6 md:mt-0 text-center group relative">
                <a href="product-detail.html">
                  <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">-30%</span>
                  <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_heart} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_reload} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                    <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                      <button type="button" className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all">
                        <img src={ico_search} className="image size-4 rouded-full" alt=""/>
                      </button>
                    </li>
                  </ul>
                  <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                    <img className="block size-full object-cover" src={img_product4} alt="" />
                  </div>
                  <div className="flex justify-center items-center gap-1 mt-5">
                    <img className="size-13 inline-block" src={ico_star_active} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                    <img className="size-13 inline-block" src={ico_star_gray} alt=""/>
                  </div>
                  <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
                  </a><div className="mt-2 relative h-5 overflow-hidden"><a href="product-detail.html">
                    </a><div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300"><a href="product-detail.html">
                      <div className="flex items-center justify-center font-bold text-15 text-center">
                        <span className="line-through text-lightGray">$59.00 </span> -
                        <span className="text-red-600">$60.00</span>
                      </div>
                      </a><a href="#none" className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500">Add to cart</a>
                    </div>
                  </div>
                
              </li>
            </ul>
          </div>
        </section>
  )
};
