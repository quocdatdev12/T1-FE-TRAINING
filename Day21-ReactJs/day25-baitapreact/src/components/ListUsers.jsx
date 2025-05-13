import React, { useState } from "react";
// [
//   {
//     id:"",
//     userName:"",
//     avatar:"",
//     salary:"",
//     des:"",
//     gender:"",
//     isMarried:true,
//     ducation:"",
//   },
// ]
export const ListUsers = () => {
  const [formData, setFormData] = useState({
    id: "",
    userName: "",
    avatar: "",
    salary: "",
    des: "",
    gender: "",
    isMarried: false,
    ducation: "",
  });
  // console.log(formData);
  const [ListUser, setListUser] = useState([]);

  const handlChange = (e) => {
    const { value, name, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  // console.log(formData,"formData");

  const handlSubmit = () => {
    const item = {
      ...formData,
      id: Date.now(),
    };
    
    if(formData.id){
      console.log(formData.id,"formmmm");
      
      const updateUser = ListUser.map(user => {
        if(user.id === formData.id){
          return {
            ...formData,
            id: user.id
          }
        }
        return user;
      })
      setListUser(updateUser);
    }else{
      setListUser([...ListUser, item]);
    }

    setFormData({
      id: "",
      userName: "",
      avatar: "",
      salary: "",
      des: "",
      gender: "",
      isMarried: false,
      ducation: "",
    });
  };
  console.log(ListUser, "ListUser");

  const handlChangeAvatar = (e) => {
    // console.log(e,"eee");
    const file = e.target.files[0];
    console.log(file);
    if (file) {
      const avatar = URL.createObjectURL(file);
      // console.log(avatar);
      setFormData({
        ...formData,
        avatar,
      });
    }
  };

  const handlRemoveUser = (id) => {
    const update =   ListUser.filter(user => user.id !== id);
    setListUser(update);  
  }

  const handlDetailUser = (user) => {
    // console.log(user,"idididid");
    setFormData({
      ...formData,
      ...user
    })
    
  }

  return (
    <div className="">
      <div className="container">
        <h2>htmlForm User</h2>
        <div>
          <label htmlFor="valId">Id:</label>
          <input value={formData.id} type="text" id="valId" disabled />
        </div>

        <div>
          <label htmlFor="valUserName">UserName:</label>
          <input
          value={formData.userName}
            name="userName"
            onChange={handlChange}
            type="text"
            placeholder="Nhập tên"
          />
          <span id="message_error"></span>
        </div>
        <div>
          <label htmlFor="valAvatar">Avatar:</label>
          <input onChange={handlChangeAvatar} type="file" id="valAvatar" />
          {formData.avatar ? <img src={formData.avatar} width={"100px"} /> : ""}
        </div>
        <div>
          <label htmlFor="valSalary">Salary:</label>
          <input
          value={formData.salary}
            name="salary"
            onChange={handlChange}
            type="number"
            placeholder="Nhập số"
          />
          <span id="message_error1"></span>
        </div>
        <div>
          <label htmlFor="valDes">Des:</label>
          <textarea value={formData.des} name="des" onChange={handlChange}></textarea>
        </div>
        <div>
          <label htmlFor="">Gender:</label>
          <div>
            <input
              onChange={handlChange}
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              style={{ width: "100px" }}
            />
            Male
          </div>
          <div>
            <input
              onChange={handlChange}
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              style={{ width: "100px" }}
            />
            Female
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <label htmlFor="">Married:</label>
          <input
            onChange={handlChange}
            type="checkbox"
            name="isMarried"
            checked={formData.isMarried}
            style={{ width: "100px" }}
          />
        </div>
        <div>
          <label htmlFor="">Ducation:</label>
          <select value={formData.ducation} name="ducation" onChange={handlChange}>
            <option disabled>Choose select ducation</option>
            <option value="1">1 Năm</option>
            <option value="2">2 Năm</option>
            <option value="3">3 Năm</option>
            <option value="4">4 Năm</option>
          </select>
        </div>
        <div className="btn-actions">
          <button onClick={handlSubmit}>{formData.id ? "Sửa" : "Thêm"}</button>
          <button id="btnDelete" style={{ display: "none" }}>
            Xóa
          </button>
        </div>
      </div>

      <div className="container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>User Name</th>
              <th>Avatar</th>
              <th>Salary</th>
              <th>Des</th>
              <th>Gender</th>
              <th>Married</th>
              <th>Ducation</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              ListUser.length !== 0 && ListUser.map(user => {
                return (
                  <tr key={user.id}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>
                      {user.avatar && <img src={user.avatar} width={"100px"} />}
                    </td>
                    <td>{user.salary}</td>
                    <td>{user.des}</td>
                    <td>{user.gender}</td>
                    <td>{user.isMarried ? "Đã Kết Hôn" : "Độc Thân"}</td>
                    <td>{user.ducation} Năm</td>
                    <td>
                      <button onClick={() => handlRemoveUser(user.id)}>Xóa</button>
                      <button onClick={() => handlDetailUser(user)}>Sửa</button>
                    </td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        <p id="message-noData">No Data</p>
      </div>
    </div>
  );
};
