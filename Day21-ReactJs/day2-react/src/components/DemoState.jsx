import React, { useState } from "react";
const DemoState = () => {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [isCheck,setCheck] = useState(true);
// hàm useState trả về hai tham số
//pt1: giá trị ban đầu => number, string, boole , arr, obj,null, undefine, () =>...
//pt2: là 1 hàm cập nhật lại giá trị ban đầu
// let count = 1;
// const handlAddCount = () => {
//   console.log("current:", count);
//   count++;
//   console.log("after:", count);
// };
const handlAddCount = () => {
  console.log("current:", count);
  setCount(count + 1);
}
// console.log("after:", count);
// chúng ta sẽ có 2 cách để cập nhật giá trị ban đầu: khi mà chùng ta không phụ thuộc vào cái state cũ
// C1: Object Form (gửi trực tiếp giá trị mới) => khi nào sử dụng: 
// C2: CallBack Form => khi nào sử dụng: khi mà cập nhật dựa trên giá trị state hiện tại ( không phụ thuộc vào trạng thái trc)
// có thể truyền thông tin từ tk con lên tk cha thông qua hàm callBack
const handlAddTocart = () => {
  const item = {
    id: Date.now(),
    name:"Sản Phẩm ",
  }
  // setCart([...cart, item]); //Object Form
  setCart((oldDate) => [...oldDate, item]);
}
// console.log(cart);

const handlToogle = () => {
  setCheck(!isCheck);
  // setCheck(!true); => false => ẩn
  // setCheck(!false); => true => hiển
}
console.log(isCheck,"isCheck");


  return (
    <>
    {/* // <div>
    //   <h1>{count}</h1>
    //   <button onClick={handlAddCount}>Add Count</button>
    // </div>
    // <div>
    //   {cart.map((product,index) => <p key={product.id}>{product.name  + index}</p>)}
    //   <button onClick={() => handlAddTocart()}>Add To Cart</button>
    // </div> */}
    {isCheck ?  <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ipsum vel temporibus rerum consectetur sequi iste consequuntur recusandae, et officiis exercitationem, voluptate sit odio. Labore assumenda error porro cupiditate. Ut.</h1> : "" }
    <button onClick={handlToogle}>{isCheck ? "Hide" : "Show"}</button>
    </>

  );
};

export default DemoState;
