/*
* Tổng quan: async/await trong JavaScript là cú pháp giúp viết code bất đồng bộ ( asynchronous) 


*/

// async bản chất đều trả về Promise
// const myFunction = async () => {
//   return 1;
// };

// myFunction()
// .then((data) => {console.log(data)})
// .catch((err) => console.log(err,'err'));

//await

const loadData = async () => {
  // fetch("https://jsonplaceholder.typicode.com/todos/")
  // .then((res) => res.json())
  // .then(data => console.log(data))
  // .catch(err => console.log(err));

  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
  // console.log(res);
  // const data = await res.json();
  // console.log(data);
  // muốn bắt lỗi tk async
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

loadData();
