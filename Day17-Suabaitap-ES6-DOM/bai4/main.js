// [
//     {
//         id:12344,
//         title:"Công việc 1",
//         status:"Todo",
//     },

//     {
//         id:12344,
//         title:"Công việc 2",
//         status:"Done",
//     }
// ]

let listTodo = [];
let idTodo = null;

const title = document.getElementById("title");
const listStatus = document.querySelectorAll("[type = 'radio'][name = 'status']");
const display = document.getElementById("display");
const select = document.querySelector("select");
const noData = document.getElementById("noData");
// console.log(listStatus);

const btn_submit = document.getElementById("btn_submit");

const handleSubmit = () => {

    let status = "";
    listStatus.forEach((item) => {
        if(item.checked){
            status = item.value;
        }
    })
    const formData = {
        title:title.value,
        status
    };
    // console.log(item);

    if(idTodo){
        // console.log("Chức năng sửa",idTodo,listTodo);
        listTodo = listTodo.map((todo) => {
            if(todo.id === idTodo){
                return {
                    ...formData,
                    id:todo.id
                }
            }
            return todo;
        })
        btn_submit.innerText = "Thêm";
        //reset lại id
        idTodo = null;
    }else{
        listTodo = [...listTodo,
            {
            ...formData,
            id: Date.now(),
        }];
    }

    // listTodo = [...listTodo,item]
    // console.log(listTodo);
    renderTodos(listTodo);
    reset();
    
};


//hàm in ra khi thêm công việc thành công
const renderTodos = (todos = []) => {
    // console.log(todos);
    // map trả về những item khi thêm công việc
    if(listTodo.length === 0){
        noData.innerHTML = "No Data";
    }else{
        noData.innerHTML = " ";
    }
    
    display.innerHTML = todos.map((todo) => {
        return `
            <div class="box_todo">
               <p>${todo.title}</p>
              <div class="box_todo_right">
                  <div class="btn-status btn-${todo.status}">${todo.status}</div>
                <div>
                    <button onclick="handleEdit(${todo.id})">Edit</button>
                    <button onclick="handleDelete(${todo.id})">Xóa</button>
                </div>
              </div>
            </div>
        `
    }).join("");
    // muốn bỏ dấu phẩy sau mẫu lần thêm mảng mới thì sau hàm map chúng ta thêm join()
}


// hàm reset khi thêm xong công việc
const reset = () => {
    title.value = "";
    // console.log(listStatus);
    listStatus.forEach((item) => {
        item.checked = false;
    });
}


// hàm xóa công việc
const handleDelete = (id) => {
    // console.log(id,'id',listTodo);
    const newData = listTodo.filter(item => item.id !== id);
        listTodo = [...newData];
        renderTodos(listTodo);
}


// hàm sửa thông tin
const handleEdit = (id) => {

    btn_submit.innerText = "Sửa";
    // console.log(id,listTodo,"edit");
    const itemTodo = listTodo.find(item => item.id === id);
    // console.log(itemTodo,"itemTodo");

    const {status,title:valueTitle} = itemTodo;
    title.value = valueTitle;
    listStatus.forEach(item => {
        if(item.value === status){
            item.checked = true;
        }
    }); 
    idTodo = id;
};

const clear = () => {
    const clearAll = listTodo.every((item))
}



// add: thì k có thông tin id
// edit: thì có id để tìm thông tin sửa
// kĩ lại kiến thức cũ