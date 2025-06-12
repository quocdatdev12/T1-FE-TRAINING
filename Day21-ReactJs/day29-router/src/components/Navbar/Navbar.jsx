import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <header>
        <div>
            <ul className='list_menu'>
                <li>
                    <Link to={"/"}>Trang chủ</Link>
                </li>
                <li>
                    <Link to={"todo"}>Todo</Link>
                </li>
                <li>Product</li>
                <li>Giỏ hàng</li>
            </ul>
        </div>
    </header>
  )
}
