import React from "react";

export const UserTable = (props) => {
  console.log(props, "proooo");
  const { users, onHandleChangeRemoveUser , onChooseDataDetail } = props;

  const handlDetailUser = (user) => {
    onChooseDataDetail(user);
  }

  return (
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
          {users.length !== 0 &&
            users.map((user) => {
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
                    <button onClick={() => onHandleChangeRemoveUser(user.id)}>
                      Xóa
                    </button>
                    <button onClick={() => handlDetailUser(user)}>Sửa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <p id="message-noData">No Data</p>
    </div>
  );
};
