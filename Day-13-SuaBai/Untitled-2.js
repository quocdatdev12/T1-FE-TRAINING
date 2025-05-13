// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến 
// số đó.
//  Input: 20
//  Output: 19

function isPrime(n){
    if(n < 2)
        return false;
    for(let i = 2 ; i <= Math.sqrt(n) ; i++){
        if(n % i === 0){
            return false;
        }
    }
    return true;
}

function maxisPrime(number){
    for(let i = number ; i > 1 ; i--){
        if(isPrime(i)){
            console.log(i);
            return i;
        }
    }
}
maxisPrime();

// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên 
// dương cho trước.
//  Input: 10, 30
//  Output: 14, 21, 28
//  Input: 50, 70
//  Output: 56, 63

function bai3(m,n){
    for(let i = m ; i <= n; i++){
        if(i % 7 === 0 && i % 5 !== 0 ){
            console.log(i);
        }
    }
}
bai3(50,70);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function bai4(chuoiSo){
    let tong = 0;
    for (const item of chuoiSo) {
        tong +=+item;
    }
    return tong;
}

function ketqua(chuoiSo){
    const inra = bai4(chuoiSo);
    console.log(`Tổng dãy số là ${inra} , ${isPrime(inra) ? "Số nguyên tố" : "Không là số nguyên tố"}`);
}
ketqua("346");

// Bài 8: Tính Tổng bội của số 3 và 5 dưới 1000

let sum = 0;
for(let i = 15 ; i <= 1000 ; i++){
    if((i % 3 === 0 || i % 5 === 0) && i > 0 ){
        sum +=i;
    }
}
console.log(`Tổng bội của 3 và 5 la: ${sum}`);

// Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử 
// trong mảng

function bai9(arr){
    let total = 0;
    for( let i = 0 ; i < arr.length ; i++){
        total +=arr[i];
    }
    return total;
}
const arrBai9 = bai9([2,3,4,5]);
console.log(arrBai9);


// Bài 10: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về số lớn nhất trong 
// mảng

function bai10(arrMax){
    let max = arrMax[0];
    for(let i = 0 ; i < arrMax.length ; i++){
        if(arrMax[i] > max){
            max = arrMax[i];
        }
    }
    console.log(`Số lớn nhất trong mảng là: ${max}`);
}
bai10([5,9,20]);

// Bài 11: cho một object  lưu thông tin của một sản phẩm trong cửa hàng , object này lưu trữ các thông 
// tin sau:
//  name: tên sp
//  code: mã sp, 
// ngoài ra sẽ có các key khác để lưu lượng hàng tồn kho của sản phẩm này, ví dụ
//  red: 10   (sản phẩm này còn 10 cái màu đỏ)
//  blue: 20 ....
//  Giả sử không biết sản phẩm có những màu nào
//  Viết hàm nhận vào một object kiểu này, trả về tổng số hàng tồn kho

let object = {
    name: "Iphone 11",
    code: "AB1208",
    bule:20,
    red:20,
}

let tongtonkho = 0;
for (const key in object) {
    if(key !== "name" && key !== "code"){
        tongtonkho +=object[key];
    }
}
console.log(tongtonkho);


// Bài 12: Viết một hàm nhận vào một mảng các học sinh , mỗi học sinh có 2 thông tin là name(tên) và và 
// score (điểm) , hiển thị ra màn hình console tên của học sinh có điểm cao nhất

function bai12(student){
    if(student.length === 0){
        console.log("Không có học sinh nào");
        
    }
    let maxScore = student[0];
    for (const index in student) {
        if(student[index].score > maxScore.score){
            maxScore = student[index];
        }
    }
    console.log(` Học sinh có điểm cao nhất: ${maxScore.name}`);
}

let arrproduct = [
    {
        name: "quoc dat",
        score: 8,
    },
    {
        name: "quoc huy",
        score: 7,
    },
    {
        name: "van nhan",
        score: 9,
    },
    {
        name: "van phong",
        score: 10,
    },
]
bai12(arrproduct);



//  câu 1:
const a = ["A", "B", "C"];
const b = [1, 2, 3];
// tạo ra mảng mới c
// let c = [
//   { value: "A1", id: 1 },
//   { value: "B2", id: 2 },
//   { value: "C3", id: 3 },
// ];
//

let c = [];

for (const index in a) {
    c[c.length] = {value: a[index] + b[index], id: b[index]};
}
console.log(c);


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
  //  tạo ra mảng mới
  //   const b = [
  //       {human:"A1",gender:"nam"},
  //       {human:"C3",gender:"nam"},
  //       {human:"D4",gender:"nam"}
  //   ]

  const mangMoi = [];

  for (const index of bai2) {
    let item = {human:index.id + index.name, gender:index.gender}
    if(index.gender !== "nữ"){
        mangMoi[mangMoi.length] = item
    }
  }
  console.log(mangMoi);
  

  // câu 3: const number = [2, -5, 6, -7, -4, 7, -1, -1];
// a: tính trung bình cộng số âm
// b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a
// c: tìm số âm lớn nhất trong mảng

const number = [2, -5, 6, -7, -4, 7, -1, -1];
let tong = 0; // tinh tong so am
let count = 0; // dem so am

for(let i = 0 ; i < number.length ; i++){
    if(number[i] < 0 ){
        tong +=number[i];
        count++;
    }
}
console.log(count,tong);
console.log(tong/count);

// b: in ra danh sách các số âm lớn hơn giá trị tính ở ý a

for(let i = 0 ; i < number.length ; i++){
    if((number[i] > (tong/count)) && number[i] < 0){
        console.log(number[i]);
    }
}

// c: tìm số âm lớn nhất trong mảng

for(let i = 0 ; i < number.length ; i++){
    let maxAm = -Infinity;
    if(number[i] < 0 && number[i] > maxAm){
        max = number[i];
    }
}
console.log(max);


// Câu 4:  Loại bỏ các phần tử trùng lặp trong mảng let numbers = [1, 2, 3, 4, 2, 5, 6, 1, 3]; tìm hiểu includes hoặc indexOF

let numbers1 = [1, 2, 2, 3, 3, 3, 4, 5, 5];

let newNumbers = [];

for(let i = 0; i < numbers1.length; i++) {
    if(numbers1[i] != numbers1[i + 1]) {
        newNumbers[newNumbers.length] = numbers1[i];
    }
}
console.log(newNumbers);




const number2 = [2, -5, 6, -7, -4, 7, -1, -1];
let flag = true;

for(let i = 0; i < number2.length ; i++){
    if(number2[i] < 0){
        flag = false;
        break;
    }
}

if(flag){
    console.log("Mảng không chứa số âm");
}
else{
    console.log("Mảng chứa số âm");
}



// xem lại bài includes
// câu 5
// tìm hiểu hàm có sẵn