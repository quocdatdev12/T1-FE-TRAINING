import React from 'react'
import { BoxCategory } from './BoxCategory'

export const Category = () => {
    const listCategory = [
        {
            id:1,
            name:"Thời trang nam",
            img:"https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp"
        },
        {
            id:2,
            name:"Điện thoại & Phụ Kiện",
            img:"https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp"
        }
    ]
  return (
    <div className="list_category">
        {/* <BoxCategory name = "Thời trang nam" img="https://down-vn.img.susercontent.com/file/687f3967b7c2fe6a134a2c11894eea4b@resize_w640_nl.webp" />

        <BoxCategory name="Điện thoại & Phụ Kiện" img="https://down-vn.img.susercontent.com/file/31234a27876fb89cd522d7e3db1ba5ca@resize_w640_nl.webp" /> */}
        {
            listCategory.map(item => <BoxCategory key={item.id} item={item} />)
        }
    </div>
  )
}
