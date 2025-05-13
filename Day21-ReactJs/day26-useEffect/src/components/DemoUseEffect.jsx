import React, { use, useEffect, useState } from "react";
import { BoxProducts } from "./BoxProducts";
import ApiServices from "../services/ApiServices";

export const DemoUseEffect = () => {
  // Cú pháp: useEffect(effectFunction,dependencies) , mới vào chạy từ trên xuống dưới chạy dom trước rr mới chạy useEffect
  // không có [] dependencies => xảy ra 3 trường hợp
  // trường hợp 1: không có gì => chỉ call ra 1 lần
  // trường hợp 2: có giá trị => chỉ call ra 1 lần
  // trường hợp 3: dependencies thay đổi thì useEffect được thực thi lại
  const [count, setCount] = useState(0);
  const [carts, setCarts] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartId, setCartId] = useState(0);

  useEffect(() => {
    // console.log(1);
    // //something....

    // return () => {}  // ? optional

    // const fetchDataCarts = async () => {
    //   const res = await fetch("https://dummyjson.com/carts");
    //   const data = await res.json();
    //   console.log(data, "carts");
    //   setCarts(data.carts);
    // };
    // fetchDataCarts();
    const fetchDataCarts = async () => {
      const res = await ApiServices.getListCarts();
      console.log(res, "res");
      setCarts(res.carts);
    };
    fetchDataCarts();
  }, [count]);
  console.log(carts);

  const handlDetail = async (id) => {
    // console.log(id,"iddd");
    setCartId(id);
    // const res = await fetch(`https://dummyjson.com/carts/${id}`);
    // const data = await res.json();
    // setProducts(data.products);
  };
  console.log(cartId);

  useEffect(() => {
    if (cartId) {
      const fetchDataDetail = async () => {
        // const res = await fetch(`https://dummyjson.com/carts/${cartId}`);
        // const data = await res.json();
        const data = await ApiServices.detailCarts(cartId);
        setProducts(data.products);
      };
      fetchDataDetail();
    }
  }, [cartId]);

  return (
    <div>
      <div className="lits_product">
        {products.map((product) => (
          <BoxProducts key={product.id} product={product} />
        ))}
      </div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Total Products</th>
            <th>Total Quantity</th>
            <th>Total</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {carts.map((cart) => {
            return (
              <tr key={cart.id}>
                <td>{cart.id}</td>
                <td>X{cart.totalProducts}</td>
                <td>X{cart.totalQuantity}</td>
                <td>{cart.total} USD</td>
                <td>
                  <button onClick={() => handlDetail(cart.id)}>Detail</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
