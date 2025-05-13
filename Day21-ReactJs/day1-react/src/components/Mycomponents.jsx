// rfc
import React from "react";

const Mycomponents = () => {
  // logic coding..  sẽ được viết ở đây trên return
  const handlClick = () => {
    alert("Xin chào !");
  };
  const count = 0;
  const isCheck = true;
  const numbers = [1, 2, 3, 4, 5];
  return (
    <React.Fragment>
      <h1 className="text-3xl text-red-400 font-bold underline">Hello world!</h1>
      <div style={{ color: "red" }}>
        MyComponent {count}
        <label htmlFor="id">Xin Chào</label>
        {isCheck ? (
          <button className="dat" onClick={handlClick}>
            Click me..!
          </button>
        ) : (
          ""
        )}
        {/* có thể viết cách khác: () => handlClick(), muốn viết 1 biến vào trong thì dùng {}  */}
        {numbers.map((number) => (
          <p key={number}>{number}</p>
        ))}
        <div>
          <p>Đạt ngu ngốc</p>
        </div>
        <span>
          <div>hay ảo tưởng</div>
        </span>
        {0 ? "" : <div>đạt tồi</div>}
        ==================
        {
          !!count && <>datttt</>
          // biến count thành dạng boll để k bị in ra màn hình
        }
      </div>
      <div></div>
    </React.Fragment>
    // không thể viết các thẻ đồng cấp vs nhau sẽ bị lỗi
  );
};

export default Mycomponents;
