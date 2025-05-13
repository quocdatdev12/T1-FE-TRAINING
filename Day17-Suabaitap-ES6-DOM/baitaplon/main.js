// b1: dựng giao diện
//
// const name = localStorage.getItem("name");
// console.log(name,"name");


//phân tích ra đối tượng cần lấy thông tin
// [
//     {
//         id:1234,
//         userName:"",
//         avatar:"",
//         salary:123,
//         des:"",
//         gender:"",
//         married:true,
//         ducation:""
//     }
// ]
//khai báo mảng rộng để lấy thông tin
let users = [];
const avatarDefault = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi9jO1ey8-tvqc5C5dHVNX2D4aAkoKipwjqg&s";

const valId = document.getElementById("valId");
const valUserName = document.getElementById("valUserName");
const valAvatar = document.getElementById("valAvatar");
const valSalary = document.getElementById("valSalary");
const valDes = document.getElementById("valDes");
const listGender = document.querySelectorAll("[type = 'radio'][name = 'gender']");
const valMarried = document.getElementById("valMarried");
const valDucation = document.getElementById("valDucation");
const previewAvatar = document.getElementById("previewAvatar");
const tbody = document.querySelector("tbody");
const noData = document.getElementById("message-noData");
const btnSubmit = document.getElementById("btnSubmit");
const btnDelete = document.getElementById("btnDelete");
const checkAll = document.getElementById("checkAll");

let listIdCheckBox = [];

//avatar để ý đến onchange
// console.log([valAvatar]);
valAvatar.onchange = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    if(file){

        const url = URL.createObjectURL(file);
        previewAvatar.setAttribute("src",url);
        previewAvatar.style.width = "300px";
        
    }
};


const handleSubmit = () => {
    let gender = "";
    const userName = valUserName.value;
    const salary = valSalary.value;
    const des = valDes.value;
    const isMarried = valMarried.checked;
    const ducation = valDucation.value;
    listGender.forEach((item) => {
        if(item.checked){
            gender = item.value;
        }
    })
    // console.log([valDucation]);
    
    const avatar = previewAvatar.getAttribute("src");
    const formData = {
        id:Date.now(),
        userName,
        avatar,
        salary,
        des,
        gender,
        isMarried,
        ducation
    }
    // console.log(formData);
    // console.log(users,"users",valId.value);
    console.log(validate(),"validate()");
    
    if(!validate()){
        if(valId.value){
            // console.log(valId.value);
            const updateUsers = users.map((user) => {
                if(user.id === +valId.value){
                    return {
                        ...formData,
                        id:user.id,
                    }
                }
                return user;
            })
            users = [...updateUsers];
            btnSubmit.innerText = "Thêm";
    
        }else{
            users = [...users,formData];
        }
    }

    renderTable(users);
    resetForm();
    setDataFormLocal();
}

// hiện thị thông tin ra màn hình
const renderTable = (users = []) => {
    if(users.length === 0){
        noData.innerHTML = "No Data";
    }
    else{
        noData.innerHTML = " ";
    }

    tbody.innerHTML = users.map((user) => {
        const checked = listIdCheckBox.includes(user.id) ? "checked" : "";
        return `
        <tr>
            <td>
               <input type="checkbox" value=${user.id} onchange="handleChangeCheckBox(this)" class="list-checkBox" ${checked}/>
            </td>
            <td>${user.id}</td>
            <td>${user.userName}</td>
            <td>
                <img src="${user.avatar ? user.avatar : avatarDefault}" width="100px"/>
            </td>
            <td>${user.salary}</td>
            <td>${user.des}</td>
            <td>${user.gender}</td>
            <td>${user.isMarried ? " Đã kết hôn" : "Độc thân"}</td>
            <td>${user.ducation} năm</td>
            <td>
            <button onclick="handlDelete(${user.id})">Xóa</button>
            <button onclick="handlEdit(${user.id})">Sửa</button>
            </td>
        </tr>
        `
    }).join(" ");

    if(listIdCheckBox.length !== users.length || users.length === 0){
        checkAll.checked = false;
    }
}

//hàm reset hông tin
const resetForm = () => {
    valId.value = "";
    valUserName.value = "";
    valSalary.value = "";
    valDes.value = "";
    valMarried.checked = false;
    valDucation.value = "";
    listGender.forEach((item) => {
        item.checked = false;
    });
    valAvatar.value = "";
    previewAvatar.setAttribute("src", "");
}


//hàm xóa
const handlDelete = (id) => {
    // console.log(id);
    const newUsers = users.filter((item) => {
        return item.id !== id;
    });
    users = [...newUsers];
    renderTable(users);
    setDataFormLocal();
}

//hàm chỉnh sửa

const handlEdit = (id) => {
    btnSubmit.innerText = "Sửa";
    const itemUser = users.find((user) => user.id === id );
    // console.log(itemUser,"itemUser");

    const {avatar,des,ducation,gender,isMarried,salary,userName} = itemUser;

    previewAvatar.setAttribute("src",avatar);
    valUserName.value = userName;
    valSalary.value = salary;
    valDes.value = des;
    valMarried.checked = isMarried;
    valDucation.value = ducation;
    listGender.forEach((item) => {
       if(item.value === gender){
        item.checked = true;
       }
    });
    valId.value = id;
}


// ================= sửa lí check 
const handleChangeCheckBox = (e) => {
    // listIdCheckBox = [...listIdCheckBox,id];    
    // console.log(listIdCheckBox,"listIdCheckBox");
    // console.log([e],"eee");
    const userId = +e.value;
    if(e.checked){
        listIdCheckBox = [...listIdCheckBox,userId];
    }else{
        listIdCheckBox = listIdCheckBox.filter(id => id !== userId);
    }
    console.log(listIdCheckBox,"listIdCheckBox");

    if(listIdCheckBox.length > 0){
        btnDelete.style.display = "block";
        if(listIdCheckBox.length === users.length){
            btnDelete.innerHTML = "Xóa tất cả";
            checkAll.checked = true;
        }
        else{
            btnDelete.innerHTML = `Xóa <span>${listIdCheckBox.length}</span>`
            checkAll.checked = false;
        }
    }
    else{
        btnDelete.style.display = "none";
    }
}

//hàm xóa checkbox
const handleDeleteFromCheckBox = () => {
    console.log(listIdCheckBox,"xxx");
    const updateUsers = users.filter(user => !listIdCheckBox.includes(user.id));
    users = [...updateUsers];
    renderTable(users);
    listIdCheckBox = [];
    btnDelete.style.display = "none";
    checkAll.checked = false;
    setDataFormLocal();
}


// chechAll danh sách
checkAll.onchange = (e) => {
    // console.log(e,"eee");
    const listCheckBox = document.querySelectorAll(".list-checkBox");
    const isCheckAll = e.target.checked;
    
    if(isCheckAll){
    // console.log(isCheckAll,"isCheckAll"); kiểm tra xem lấy đc giá trị checked ch
    //mảng trả về id của users
    const ids = users.map(user => user.id);
    // console.log(ids,"ids");
    //kiểm tra kick checkall có lấy ra đc listCheckBox
    // console.log([listCheckBox], "listCheckBox");
    listCheckBox.forEach(item => {
        item.checked = true;
    })
    listIdCheckBox = [...ids];
    btnDelete.style.display = "block";
    btnDelete.innerHTML = "Xóa tất cả";
    }else{
        listIdCheckBox = [];
        btnDelete.style.display = "none";
        listCheckBox.forEach(item => {
            item.checked = false;
        })
    }
}


// localStorage 

// lưu dữ liệu
const setDataFormLocal = () => {
    // console.log(users,"user");
    //đổi dữ liệu sang kiểu strinig
    const dataLocal = JSON.stringify(users);
    // console.log(dataLocal);
    localStorage.setItem("dataUsers",dataLocal);
}


//lấy dữ liệu ra ngoài
const getDataFormLocal = () => {
    const dataLocal = localStorage.getItem("dataUsers");

    if(dataLocal){
     //đổi lại kiểu dữ liệu
    const saveData = JSON.parse(dataLocal);
    users = [...saveData]
    renderTable(users);
    }
}
getDataFormLocal();


// dark mot: chúng ta có thể dùng nó để sài dữ liệu ở trang khác



// validate

const validate = () => {
    let isCheckValueUserName = false;
    let isCheckValueSalaty = false;
    const isAlpha = /^[a-zA-Z]+$/;
    if(valUserName.value === ""){
        isCheckValueUserName = true;
        document.getElementById("message_error").innerText = "Không được bỏ trống";
        document.getElementById("message_error").style.color = "red";
    }else if(!isAlpha.test(valUserName.value)){
        isCheckValueUserName = true;
        document.getElementById("message_error").innerText = "Không được phép ghi kí tự đặc biệt";
        document.getElementById("message_error").style.color = "red";
    }else{
        document.getElementById("message_error").innerText = "";
    }

    if(valSalary.value === ""){
        isCheckValueSalaty = true;
        document.getElementById("message_error1").innerText = "Không được bỏ trống";
        document.getElementById("message_error1").style.color = "red";
    }else{
        document.getElementById("message_error1").innerText = "";
    }
    return isCheckValueUserName || isCheckValueSalaty;
}

