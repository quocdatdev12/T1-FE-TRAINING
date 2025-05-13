// hàm là xử lí 1 công việc có đầu vào đầu ra
// hàm là đoạn mã code được xây dựng để thực hiện một chức năng của chương trình
// hàm được kích hoạt khi ta gọi nó

function myFunction() {
    // Xử lí dữ liệu hàm
    // Giá trị trả về
}

myFunction(); // lời gọi hàm

function sayHello() {
    // document.write('Hello Word !')
}
sayHello();

// typeof để kiểm tra kiểu dữ liệu
const text = "quoc dat";;
console.log(typeof text);



const content1 = document.getElementById("content1");
const content2 = document.getElementById("content2");

//c1
// function handleTab1(){
//      content1.style.display = "block";
//      content2.style.display = "none";
// }

// function handleTab2(){
//     content1.style.display = "none";
//     content2.style.display = "block";
// }

// cách truyền tham só vào

function handleTab(tab,name){
    console.log(tab,name);
    if(tab === "tab1"){
        content1.style.display = "block";
        content2.style.display = "none";
    }else{
        content1.style.display = "none";
        content2.style.display = "block";
    }
}


// đặt tên hàm sao cho đúng với tác vụ 
// tenham () => có thể truyền bắt cứ kiểu dữ liệu nào
function myFun(){
    // coding..
    console.log("Hello Wrod !");
    
}
//gọi hàm để chạy phần định nghĩa hàm
myFun();

//4: Truyền tham số vào hàm

// let number = 1;

function exampleFun(number = 1,name = "dat"){
    console.log(number);
    console.log(name);
    
}
// giá trị mới sẽ luôn luôn đè lên giá trị mặc định, trái -> phải.
exampleFun(3, "vy");

function functionName(message,site,age) {
    console.log(message + " from " + site + age);
}
functionName("I", "Việt Nam ");

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

function handleRenderData(){
    const product = {
        name: "Iphone 11",
        price: 1000
    }
    displayData(product)
}

function displayData(item){
    document.getElementById("renderdata").innerHTML = `
        <h1>Name: ${item.name}</h1>
        <h1>Price: ${item.price}</h1>
    `
}


// Quiz

function getCoreNumber(number1, number2){
    return (number1 * number2);
}

//gọi hàm với các tham số khác nhau
let result1 = getCoreNumber(3,4);
let result2 = getCoreNumber(5,6);

//gọi tổng hai hàm
let total = result1 + result2;
console.log(`Tổng của hai hàm tham số khác nhau là: ${total}`);


let tong = 0;
for(i = 1 ; i <= 3 ; i++){
    tong +=i*2;
    console.log(tong);
}

// sửa quiz

//bài 7:
function bai7(a = 0,b = 1, c = 1){
    return a * b * c;
    // 4 * 2 * 1
}
bai7(4,2,1);

//bài 8:
function tich(a,b){
    return a * b;
}

const cong = tich(2,3) + tich(5,4);
console.log(cong);


// bài 9:

function getMax(a,b){
    if(a > b){
        return a;
    }
    return b;
}

const thanhpham = getMax(9,6);
console.log(thanhpham);

//bai10:

function thongbao(mess){
    console.log(mess);
}

function chanle(so,callback){
    if(so % 2 === 0){
        thongbao("Đây là số chẵn")
    }
        thongbao("Đây là số lẻ")
}
chanle(5);

//bai 11:

