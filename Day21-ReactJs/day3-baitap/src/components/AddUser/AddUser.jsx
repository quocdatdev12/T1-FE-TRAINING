import React, { useState } from "react";
import { MyButton1 } from "./MyButton1";
// import { MyButton } from './MyButton1'

export const AddUser = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState(
    {
      id:"",
      name: "",
      rank: "",
      price: "",
    },
);

  const handleChange = (index,field, value) => {
    const newuser = {formData};
    newuser[index][field] = value;
    setFormData(newuser);
  };

  const handleAddUser = () => {
    setUsers([...users, formData]);
  };
  console.log(users);

  return (
    <div>
      <div className=" m-auto w-[100px] mt-2">
        <MyButton1
          onClick={handleAddUser}
          className=" border p-2 rounded-md cursor-pointer  "
        >
          AddUser
        </MyButton1>
      </div>
      {
        users.length > 0 && (<div className="mt-10">
          <div className="flex">
            {users.map((users, index) => (
              <div
                key={index}
                className=" border p-3 rounded-lg w-[300px] mr-10 "
              >
                <div className="mb-2">
                  <label htmlFor="">User Name: </label>
                  <input
                    type="text"
                    placeholder="Nhập tên"
                    className=" border "
                    value={formData.name}
                    onChange={(e) => handleChange(index, "name", e.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="">Rank: </label>
                  <select
                    name=""
                    id=""
                    className=" border "
                    onChange={(e) => handleChange(index, "rank", e.target.value)}
                  >
                    <option>Cấp 1</option>
                    <option>Cấp 2</option>
                    <option>Cấp 3</option>
                  </select>
                </div>
                <div>
                  <label>Price:</label>
                  <input
                    type="number"
                    placeholder="Nhập giá"
                    className=" border w-[200px]"
                    onChange={(e) => handleChange(index, "price", e.target.value)}
                  />
                </div>
              </div>
            ))}
          </div>
          <MyButton1 className=" border p-2 rounded-md cursor-pointer mt-10 ">
            Submit
          </MyButton1>
        </div>)
      }
    </div>
  );
};
