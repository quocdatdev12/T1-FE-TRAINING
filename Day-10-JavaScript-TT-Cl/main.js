// const nhap = prompt('mời bạn nhập số') ;

//     if( nhap > 0 && nhap % 2 === 0){
//         console.log("Bạn đã nhập đúng !");
//     }else{
//         console.log("Bạn đã nhập sai !");
//     }

    const number1 = prompt("nhập n1 =");
    const number2 = prompt("nhập n2 =");
    if( (number1 >= 0 && number2 >= 0) || (number1 < 0 && number2 < 0) ){
        //num1 * number 2 > 0
        console.log("Hai số cùng dấu");
    }else{
        console.log("Hai số khác dấu");
    }
    



// string + bất cứ dữ liệu nào => đều biến thành kdl string

console.log("1" + 12);
console.log("1" + true);

//biến số thành kiểu string 12 => '12'

console.log(12 + "");
//-Toán tử chuyển đổi kiểu dữ liệu thành number (+)
// "1" => 1

console.log(+"1");

// Toán tử gán
//- Bạn có thể gán giá trị cho biến bằng kết quả của một biểu thức

let result = 1 + 2 + 3 -4;
console.log(result);

// Bạn cũng có thể thay đổi giá của một biến và gán lại cho chính nó
let n = 1;
n = n + 2;
// viet ngan gon: n +=2 ( n = n +2)
console.log(n);

//Toán tử tăng 1 đơn vị (++) và giảm 1 đơn vị (--)

let a = 2;
++a;
console.log(a);

let b = 2;
b++;
console.log(b);

//Nếu bạn sử dụng các toán tử trên một cách độc lập thì hai cách viết là hoàn toàn giống nhau.

//Toán tử bitwise

// &&
console.log(true && true);

// ||

//console.log(true && flase);

//Toán tử so sánh
{
    const a = 1;
    const b = "1";

    console.log(a == b);
    // chỉ ss giá trị , k ss kiểu dữ liệu (bằng k nghiêm ngặt)

    console.log(a === b);

    // so sánh giá trị & kiểu dữ liệu (bằng nghiêm ngặt)

    //=>100% sử dụng nghiêm ngặt
    
}

{
    //Toán tử logic

    //Not (phủ định !)

    const isCheck = true;
    console.log(!isCheck);

    //Nullish Coalescing (??)

    // a ?? b

    // a => a !== null và a !== undefined

    // b=> a === null và a === undefined

    //vd

    const a = "Dat";
    const b = 3;
    console.log(a ?? b);
}

{
    const avatar = "anh dai dien";
    const userName = "Nguyen Van Quoc Dat";

    // const kq = avatar ?? userName.slice(0,1);
    // console.log(kq);

    if(avatar === null) {
        const kq = userName.slice(0,1);
        console.log(kq);
    }
    else {
        console.log(avatar);
        
    }
    
}

//CÂU LỆNH IF

if(" "){
    //coding
    console.log("Hello Word !");
    
}

const number = 8;

if(number % 2 !== 0){
    console.log(`kết quả n = ${number} là số lẻ`);
}else{
    console.log(`kết quả n = ${number} là số chẵn`);
}

const date = new Date;
const minutes = date.getMinutes();

console.log(minutes);

if(minutes === 4 ){
    console.log("Chuẩn bị nạp tiền đi ...");
    
}

const valueInput = "1";

if(valueInput) {
    console.log("Bật nút senn");
    
}

//CÂU LỆNH IF ELSE

if(false){

}else{
    console.log("");
    
}

//CÂU LỆNH IF ELSE IF

const hour = date.getHours();
console.log(hour);

if(hour >= 6 && hour <= 10){
    console.log("đây là buổi sáng");
}
else if(hour >= 11 && hour <= 13) {
    console.log("đây là buổi trưa");
}
else if(hour >= 14 && hour <= 18) {
    console.log("đây là buổi chiều");
}
else if(hour >= 19 && hour <= 22) {
    console.log("đây là buổi tối");
}
else{
    console.log("Đây là ban đêm");
}

hour >= 6 && hour <= 10 ? console.log("đây là buổi sáng") : hour >= 11 && hour <= 13 ? console.log("đây là buổi trưa") : hour >= 14 && hour <= 18 ? console.log("đây là buổi chiều") : hour >= 19 && hour <= 22 ? console.log("đây là buổi tối") : console.log("Đây là ban đêm");


//Toán tử rẽ nhánh ?

const myNumber = 8;

if(myNumber % 2 === 0){
    console.log("đây là số chẵn");
}else{
    console.log("đây là số lẻ");
}

myNumber % 2 === 0 ? console.log("đây là số chẵn") : console.log("đây là số lẻ");    


// bài tập 

{
    const age = 24;
    age < 18 ? console.log("Quá trẻ") : age > 50 ? console.log("Quá già") : console.log("Ok !");
    ;
    
    //2

    const a = 5 ;
    const b = 7 ;

    if( (a >= 0 && b >= 0) || (a < 0 && b < 0) ){
        console.log("Hai số cùng dấu");
    }else{
        console.log("Hai số khác dấu");
        
    }
}

//CÂU LỆNH SWITCH CASE 
// sử dụng SWITCH CASE  khi bt trc kết quả

{
    const number = 2;

    switch (number) {
        case 1:
                console.log("đây là số 1");
                break;
        case 2:
            console.log("đây là số 2");
            break;
    
        default:
            console.log("ko xác định");
    }
}

{
    let x = 2;

    switch (x) {
        case 1:
        case 4:
        case 6:
            console.log("x không phải là số nguyên tố");
            break;
        case 2:
        case 3:
        case 5:
            console.log("x là số nguyên tố");
            break;
        default:
            console.log("Chưa rõ !");
            
    }
}

{
    const month = date.getMonth() + 1;
    console.log(month);
    
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 9:
        case 10:
            console.log("Tháng có 31 ngày");
            break;
        case 2:
            console.log("Tháng có 28 ngày");
            break;
        case 4:    
        case 6:    
        case 8:    
        case 11:
            console.log("Tháng có 30 ngày");
            break;
        default:
            console.log("Not Found");
    }
}

{
    let number = 0;
    console.log(number++);
    console.log(++number)
    console.log(number);
    
}

{
    const day = 0;

    switch (day) {
        case 2:
            console.log("Thứ 2");
            break;
        case 3:
            console.log("Thứ 3");
            break;
        case 4:
            console.log("Thứ 4");
            break;
        case 5:
            console.log("Thứ 5");
            break;
        case 6:
            console.log("Thứ 6");
            break;
        case 7:
            console.log("Thứ 7");
            break;
        case 0:
            console.log("Chủ nhật");
            break;
        default:
            console.log("Không có ngày hợp lệ");
            
    }    
}



