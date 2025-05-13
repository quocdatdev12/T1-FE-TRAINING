
//bài 2
function evenChecknumber(number){
    if(number % 2 === 0){
        console.log("Là số chẵn");
    }else{
        console.log("Là số lẻ");
    }
}
evenChecknumber(8);

//bài 0

function identifyColor(color) {
    
    switch (color) {
        case "red":
            console.log("Màu đỏ");
            break;
        case "green":
            console.log("Màu xanh");
            break;
        case "gold":
            console.log("Màu vàng");
            break;
        case "black":
            console.log("Màu đen");
            break;
        case "white":
            console.log("Màu trắng");
            break;
        default:
            console.log("Không xác định được màu trong hệ thống");
    }
}
identifyColor("red");

// bài 1:

function minNumber(a,b){
    if(a > b){
        return a;
    }
    return b;
}
let max = minNumber(10,5);
console.log(`Giá trị lớn nhất là: ${max}`);

//5: Return trong JavaScript

function myFun1(){
    return "dat";
}

const kq = myFun1();
console.log(kq);

function sum(number1, number2){
    return number1 + number2;
}

const sumNum1 = sum(2,3);
console.log(sumNum1);

const sumNum2 = sum(12,3);
console.log(sumNum2);

function validate() {
    const valueInput = "";

    if(valueInput){
        return true;
    }
    return false;
}

console.log(validate());

if(validate()){
    console.log("btn send sáng lên");
}else{
    console.log("btn send disable");
}

// 6: Quy tắc đặt tên cho hàm cũng giống như biến
// get... - trả về một giá trị.
// set... - gán giá trị cho một biến.
// check... - kiểm tra một số thứ và trả về giá trị boolean.
// display... - hiển thị một số thứ
const itemProduct = {
    name:"iphone",
    prcie:1000 
}

function getDetailProduct(item){
    return item
}
console.log(getDetailProduct(itemProduct));

//hoiting => bug

// exampleFun1();
function exampleFun1(){
    console.log("Hello Wrod !");
    
}
exampleFun1();

//ES6 => arrow function
// const exampleFun1 = () =>{
//     console.log("Hello Word !");
    
// }
// exampleFun1();

//callback: là 1 hàm được gọi bên trong hàm khác.



function ketQua(mess){
    console.log(mess);
}

function kiemTraso(number){
    if(number % 2 === 0){
        return ketQua('Đây là số chẵn')
    }else{
        return ketQua('Đây là số lẻ')
    }
}
kiemTraso(8);


//Quiz
function getCoreNumber(number1, number2){
    return (number1 * number2);
}

//gọi hàm với các tham số khác nhau
let result1 = getCoreNumber(3,4);
console.log(result1);
let result2 = getCoreNumber(5,6);
console.log(result2);


//gọi tổng hai hàm
let total = result1 + result2;
console.log(`Tổng của hai hàm tham số khác nhau là: ${total}`);


function multiply(a = 0,b = 1,c = 1){
    return a * b * c;
}
console.log(multiply(2));
console.log(multiply(2,3));
console.log(multiply(2,3,4));


function  thucHienTinhToan(a,b,callBack){
    const result = callBack(a,b);
    console.log(`Kết quả:${result}`);
}

function tinhtong(a,b){
    return a + b;
}
function tinhhieu(a,b){
    return a - b;
}

thucHienTinhToan(2,3,tinhtong); // 5
thucHienTinhToan(5,3,tinhhieu); // 2