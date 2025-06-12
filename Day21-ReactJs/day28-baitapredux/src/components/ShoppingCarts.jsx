import React, { useEffect, useReducer, useState } from "react";
import cartReducer, { ADD_DECREMENT, ADD_DELETE, ADD_PRODUCT } from "../reducers/cartReducer";
import { useSelector } from "react-redux";

// const ADD_PRODUCT = "ADD_PRODUCT";
// const ADD_DECREMENT = "DECREMENT_PRODUCT";
// const ADD_DELETE = "DELETE_PRODUCT";

// const cartReducer = (state, action) => {
//   //carts
//   switch (action.type) {
//     case ADD_PRODUCT:
//       // xử lí số lượng sản phẩm
//       const axists = state.find((item) => item.id === action.payload.id);
//       if (axists) {
//         const updateCarts = state.map((item) => {
//           if (item.id === action.payload.id) {
//             return {
//               ...item,
//               quantity: item.quantity + 1,
//             };
//           }
//           return item;
//         });
//         return [...updateCarts];
//       }
//       return [...state, { ...action.payload, quantity: 1 }];
//     case ADD_DECREMENT:
//       // xử lí trừ số lượng sản phẩm
//       const updateCarts = state.map((product) => {
//         if (product.id === action.payload) {
//           return {
//             ...product,
//             quantity: product.quantity - 1
//           };
//         }
//         return product;
//       });
//       return [...updateCarts];
    
//     case ADD_DELETE:
//         //xóa sản phẩm
//         const updateProduct = state.filter((product) => {
//             return product.id !== action.payload;
//         })
//         return[...updateProduct];

//     default:
//       return state;
//   }
// };

export const ShoppingCarts = () => {
  const products = [
    { id: 1, name: "🍎 Táo", price: 10 },
    { id: 2, name: "🍌 Chuối", price: 5 },
    { id: 3, name: "🍇 Nho", price: 15 },
  ];

  const [carts, dispath] = useReducer(cartReducer, []);
  console.log(carts, "carts");
  const [isShowCart, setIsShowCart] = useState(false);
  // const count = useSelector((state) => state.couter.count);

  const handleAddToCart = (product) => {
    console.log(product, "product");
    dispath({
      type: ADD_PRODUCT,
      payload: product,
    });
  };

  const handleShowCarts = () => {
    if (carts.length) {
      setIsShowCart(!isShowCart);
    }
  };
  //phần xóa và giảm số lượng sản phẩm
  const handleDecrementProduct = (id) => {
    // console.log(product, "productproduct");
    dispath({
      type: ADD_DECREMENT,
      payload: id,
    });
  };

  const handleDeleteProduct = (id) => {
    console.log(id,'iddddddddd');
    dispath({
      type: ADD_DELETE,
      payload: id,
    });
  }

  useEffect(() => {
    if(carts.length === 0){
        setIsShowCart(false);
    }
  },[carts]);

  return (
    <div>
      {/* <h1>{count}</h1> */}
      <h1>Danh sách sản phẩm</h1>
      <div>
        {products.map((products) => (
          <div key={products.id}>
            <span>{products.name}</span> - <span>{products.price}$</span>
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleAddToCart(products)}
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
      <h2 onClick={handleShowCarts}>
        Giỏ hàng <span>{carts.length}</span>{" "}
      </h2>
      {isShowCart && (
        <div>
          {carts.map((products) => (
            <div key={products.id}>
              <span>{products.name}</span> - <span>{products.price}$</span>
              <span style={{ marginLeft: "10px" }}>x{products.quantity} </span>
              <button
                onClick={() => handleAddToCart(products)}
                style={{ padding: "0px 5px", marginLeft: "3px" }}
              >
                +
              </button>
              <button
                onClick={() => handleDecrementProduct(products.id)}
                style={{ padding: "0px 5px", marginLeft: "3px" }}
                disabled={products.quantity === 1}
              >
                -
              </button>
              <button onClick={() => handleDeleteProduct(products.id)} style={{ padding: "0px 5px", marginLeft: "3px" }}>
                Xóa sản phẩm
              </button>
            </div>
          ))}
          <h2>
            Tổng cộng:{" "}
            {carts.reduce(
              (acc, current) => acc + current.price * current.quantity,
              0
            )}
            $
          </h2>
        </div>
      )}
    </div>
  );
};
