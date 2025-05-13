import React from 'react'
import ico_freeship from "../../assets/images/ico_freeship.svg"
import ico_quality from "../../assets/images/ico_quality.svg"
import ico_return from "../../assets/images/ico_return.svg"
import ico_support from "../../assets/images/ico_support.svg"
import { BoxServices } from './BoxServices'



export const SectionServices = () => {
  return (
    <section className="bg-gray">
          <div className="container">
            <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
              {/* <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                <img src={ico_freeship} alt="" />
                <span className="text-sm lg:text-base font-semibold">Free Shipping Over $50</span>
              </li>

              <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                <img src={ico_quality} alt=""/>
                <span className="text-sm lg:text-base font-semibold">Quality Assurance</span>
              </li>

              <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                <img src={ico_return} alt=""/>
                <span className="text-sm lg:text-base font-semibold">Return within 14 days</span>
              </li>

              <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
                <img src={ico_support} />
                <span className="text-sm lg:text-base font-semibold">Support 24/7</span>
              </li> */}
              <BoxServices img={ico_freeship} title={"Free Shipping Over $50"} />
              <BoxServices img={ico_quality} title={"Quality Assurance"} />
              <BoxServices img={ico_return} title={"Return within 14 days"} />
              <BoxServices img={ico_support} title={"Support 24/7"} />
            </ul>
          </div>
        </section>
  )
}
