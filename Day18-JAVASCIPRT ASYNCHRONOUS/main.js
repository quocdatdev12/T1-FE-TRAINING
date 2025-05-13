// https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=1s link xem 
//https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status link xem trạng thái api

// setTimeout(() => {
//     console.log("Công việc 1");
    
// },1000);

// setTimeout(() => {
//     console.log("Công việc 2");
    
// },0);

// console.log("Công việc 3");

// setTimeout(() => {
//     console.log("Công việc 4");
    
// },3000);

// setTimeout(() => {
//     console.log("Công việc 5");
    
// },2000);

const congViec1 = (Callback) => {
    setTimeout(() => {
    console.log("Công việc 1");  
    Callback();
},1000);

}

const congViec2 = (Callback) => {
    setTimeout(() => {
            console.log("Công việc 2");
            Callback();
        },0);
}

const congViec3 = (Callback) => {
    console.log("Công việc 3");
    Callback();
}

const congViec4 = (Callback) => {
    setTimeout(() => {
            console.log("Công việc 4");
            Callback();
            
        },3000);
}

const congViec5 = () => {
    setTimeout(() => {
            console.log("Công việc 5");
            
        },2000);
}

// congViec1(() => {
//     congViec2(() => {
//         congViec3(() => {
//             congViec4(() => {
//                 congViec5()
//             })
//         })
//     })
// })
//đây gọi là callBack hell


// lần lượt chạy là 3 2 1 5 4
// Call Stack: giúp cho chúng ta xử lý những task vụ đồng bộ
// Web Apis: giúp cho chúng ta xử lí những task vụ bất đồng bộ
//Callback queue:những task vụ ở hàng chờ
// Event loop: đại khái giống như người vận chuyển , đưa các task vụ hàng chờ cho bên call stack xử lý, (nếu call stack không xử lý task vụ nào).


// Xử lý bất đồng bộ bằng promise

const promiseExample = new Promise((resolve, reject) => {
    // resolve("Thành Công");
    // reject("Thất Bại");
})
// console.log(promiseExample,"promiseExample");

// nếu thành công nó sẽ làm 1 công việc nào đó và trả về .then 
// promiseExample.then((data) => {
//     console.log(data);
// })

// Nếu thất bại nó sẽ làm 1 công việc nào đó và trả về .catch
// .catch((error) => {
//     console.log(error);
// })

const fetchDataPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts",{
        method: "GET",
    }).then((res) => {
        // console.log(res.json(),"res");
        return res.json();
    })
    .then(data => console.log(data))
    // nếu thất bại
    .catch(err => console.log(err));
}
// fetchDataPost();

//  Chain promise : 
// để giải quyết vấn đề callbackhell. thì promise chain xin ra để giải quyết vân đề đó . 

// const chainPromise = new Promise((resolve, reject) => {
//     resolve("Thành công");
// })
// chainPromise.then((data) => {
//     return 1
// }).then(data => {
//     return new Promise((resolve, reject) => {
//         resolve("Thành công xxxx");
//     })
// }).then(res => console.log(res))
//dữ liệu trả về ở bên trên thì sẽ đc đưa vào dữ liệu bên dưới
