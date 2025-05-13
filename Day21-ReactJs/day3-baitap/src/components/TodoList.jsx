import React, { useState } from 'react'

export const TodoList = () => {
// [
//     {
//         title:cv1,
//         status:true,
//         id:12345
//     }
// ]
const [listTodo, setListTodo] = useState([]);
const [formData,setFormData] = useState({
    id:null,
    status:true,
    title:""
});
const handlChange = (e) => {
    const title = e.target.value;
   setFormData({
    ...formData,
    title
   })
}
// console.log(formData,"formData");
const handlSubmit = () => {
    const item = {...formData, id: Date.now() };
    setListTodo([...listTodo,item]);
    setFormData({
        id:null,
        status:true,
        title:""
    })
}
console.log(listTodo,"listTodo");

const handlRemove = (id) => {
    // console.log(id,"idid");
    // console.log(listTodo,"listTodo");
    const updateListTodo = listTodo.filter(todo => todo.id !== id);
    setListTodo(updateListTodo);
}

const handlDoneTodo = (id) => {
     // console.log(id,"idid");
    // console.log(listTodo,"listTodo");
    const updateTodos = listTodo.map(todo => {
        if(todo.id === id){
            return {
                ...todo,
                status: !todo.status
            }
        }
        return todo;
    })
    setListTodo(updateTodos);
}

  return (

   <div className='bg-[#e4e0e0] h-full w-[300px] m-auto p-4 mt-5 rounded-lg '>
     <div className='flex gap-3 '>
        <input onChange={handlChange} className=" border pl-2 bg-white rounded " type="text" placeholder='Add Todo' value={formData.title} />
        <button disabled={!formData.title} className={ `border rounded  px-2 ${formData.title ? " cursor-pointer bg-blue-600 text-white " : " cursor-text "}` } onClick={handlSubmit}>Add</button>        
    </div>

    <div>
        {
            listTodo.map(todo => 
            <div key={todo.id} className='flex p-2 mt-3 bg-white rounded gap-5 items-center justify-between '>
                <span className={todo.status ? "" : " line-through "}>{todo.title}</span>
                <div className='flex gap-2 items-center' >
                    <button onClick={() => handlDoneTodo(todo.id)} className=' border rounded p-1 cursor-pointer ' > { !todo.status ? "Not Done" : "Done" } </button>
                    <button onClick={() => handlRemove(todo.id)} className=' border rounded p-1 cursor-pointer ' >Remove</button>
                </div>
            </div>)
        }
    </div>

   </div>
  )
}
