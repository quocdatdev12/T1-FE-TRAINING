// vòng lặp rất quan trọng nên học phải kĩ
// cú pháp vòng lặp
//khởi tạo k đc dùng const vì const khi gán gtri k thay đổi lại đc
// for(let i = 0 ; i < 10 ; i++){
//     //coding 
//     console.log(i);
// }

// Câu lệnh “continue” và “break”
// continue
for(let i = 0 ; i < 10 ; i++){
    // if(i === 2){
    //     continue;
    // }
        // if(i === 2 || i === 3){
        //     continue;
        // }
        // console.log(i);
    
    if(i === 3){
        break;
    }
    console.log(i);
}

function myFun(){
    console.log("Star function ");
    for(let i = 0 ; i < 10 ; i++){
        if(i === 3){
            // break;
            return;
        }
        console.log(i);
    }
    console.log("End function");
}
myFun();

for(let i = 0 ; i <= 5 ; i++){
    if(i % 2 === 0){
        console.log(`Day la so chan ${i}`);
    }
}

// lần 1 : i = 0 ; => 0
// lần 2 : i = 1 ; => 
// lần 3 : i = 2 ; => 2
// lần 4 : i = 3 ; => 
// lần 5 : i = 4 ; => 4
// lần 6 : i = 5 ; => 
// lần 7 k thõa mãn dừng vòng lặp

//bài 1: tính tổng của mảng numbers = [10,20 15]
//muốn tính tổng thì lấy độ dài của mảng và dùng for lấy index để lấy giá trị 
let numbers = [10, 20, 15];
let sum = 0;
for(let i = 0 ; i < numbers.length; i++){
    sum += numbers[i];
}
console.log(sum);

//bài 2:
function copy(string){
    let chuoi = "";
    for(let i = 0 ; i < 10; i++){
        chuoi += `${i === 0 ? '' : '-'} ${string}`
    }
    return chuoi;
}
const kq = copy("dat");
console.log(kq);

// bài 3:
function giaiThua(n){
    let thua = 1;
    for(let i = 1; i <= n; i++){
        thua *=i;
    }
    console.log(thua);
    
}
giaiThua(5);
// const dapan = giaiThua(5);
// console.log(dapan);


//bài 4:
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74, 22, 23];
let evenNumbers = [] ;
let oddNumbers = [] ;

for(let i = 0 ; i < arrNumber.length ; i++){
    if(arrNumber[i] % 2 === 0){
        evenNumbers[evenNumbers.length] = arrNumber[i];
        // console.log(`Mang co so chẵn: ${evenNumbers}`);
    }
    else{
        oddNumbers[oddNumbers.length] = arrNumber[i];
        // console.log(`Mang co so lẻ: ${oddNumbers}`);
    }
}
// lần 1: length = 0 ; evenNumbers[0] = 4; evenNumbers[4];
// lần 2; length = 1; evenNumbers[1] = 44; evenNumbers[4,44]
console.log(`Mang co so chẵn: ${evenNumbers}`);
console.log(`Mang co so lẻ: ${oddNumbers}`);

// ========================================================================

//for in 
// nếu mà object thì giúp cho ta lấy đc key 
// nếu array giúp ta lấy index

// const myObject = {
//     user: "dat",
//     age: 20,
//     adderss: "Kon Tum",
// }

// for (const key in myObject) {
//     console.log(key);
//     console.log(myObject[key]);
    
    
// }


//dùng forin xóa key rỗng
const myObject = {
    user: "dat",
    age: 20,
    adderss: "Kon Tum",
    adderss1: "Kon Tum",
    a: "",
    b: "",
    c: "",
    d: ""
}

for (const key in myObject) {
   if(myObject[key] === ""){
    delete myObject[key]
   }
}
console.log(myObject);


// lấy index của arr

const products = [
    {
        title: "Iphone 10",
        price: 1000,
    },

    {
        title: "Iphone 11",
        price: 2000,
    }
]

let tatol = 0;
for (const index in products) {
    console.log(products[index]);
    tatol +=products[index].price;
    
}
console.log(tatol, "tong");

//=================
//for of
// nếu mà arr nó giúp cho chúng ta lặp qua từng phần tử và lấy giá trị
//nếu mà string thì giúp chúng ta lặp qua từng phần tử

let tatol1 = 0;
for (const item of products) {
    console.log(item);
    tatol1 +=item.price
}
console.log(tatol1, "forof");


//string
for (const string of "quocdat") {
    console.log(string);
    
}

// đổi chuỗi thành số (+)vào trc
let something = "123456";
let inra = 0;
for (const item of something) {
    inra +=+item;
}
console.log(inra);































// khởi tạo biến vòng lặp dùng let k dùng khác
// nghe đoạn 21h18 kĩ

// for(let i = 0; i < 10; i++){
//     continue;
//     console.log(i);
// }

// // học kĩ continue và break.

// // khởi tạo biến vòng lặp dùng let k dùng khác

// //i++ mỗi lần chạy nó tăng lên 1 đơn vị 
// for(let i = 0; i < 10; i++){
//     console.log(`${i}: xin lỗi`);
// }

// //bai1
// let numbers = [10,29,15];
// let tong = 0;
// for(let i = 0 ; i < numbers.length ; i++){
//     tong +=numbers[i];
// }
// console.log(tong);


// //bai2
// function copy(string){
//     let chuoiSo = "";
//     for(let i = 0 ; i < 10; i++){
//         chuoiSo += `${i === 0 ? "" : '-'} ${string}`
//     }
//     return chuoiSo;
// }
// const kq = copy("dat");
// console.log(kq);

// //bai3

// function giaithua(n){
//     let kq = 1;
//     for(let i = 1 ; i <= n; i++){
//         kq *=i;
//     }
//     console.log(kq);
// }
// giaithua(5);


// // bai4
// const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74,22, 23];
// let evenNumbers = [];
// let oddNumbers = [];

// for(let i = 0 ; i < arrNumber.length ; i++ ){
//     if(arrNumber[i] % 2 === 0 ){
//         console.log(arrNumber[i]);
//         evenNumbers[evenNumbers.length] = arrNumber[i];
//     }
//     else{
//         oddNumbers[oddNumbers.length] = arrNumber[i];
//     }
// }
// console.log(evenNumbers);
// console.log(oddNumbers);


// for in 
// nếu mà object



const bai2 = [
    {
      id: 1,
      name: "A",
      gender: "nam",
    },
    {
      id: 2,
      name: "B",
      gender: "nữ",
    },
    {
      id: 3,
      name: "C",
      gender: "nam",
    },
    {
      id: 4,
      name: "D",
      gender: "nam",
    },
  ];
  const B = [];
  for (const item of bai2) {
    console.log(item);
    B[B.length] = {human: item.id + item.name, gender: item.gender}
  }
  console.log(B);