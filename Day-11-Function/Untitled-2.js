
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
