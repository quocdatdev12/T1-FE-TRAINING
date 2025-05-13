// khởi tạo biến vòng lặp dùng let k dùng khác

let num = [10, 20, 15];
let sum = 0;
for(let i = 0 ; i < num.length; i++){
    sum += num[i];
}

console.log(sum);


































//i++ mỗi lần chạy nó tăng lên 1 đơn vị 
for(let i = 0; i < 10; i++){
    console.log(`${i}: xin lỗi`);
}

//bai1
let numbers = [10,29,15];
let tong = 0;
for(let i = 0 ; i < numbers.length ; i++){
    tong +=numbers[i];
}
console.log(tong);


//bai2
function copy(string){
    let chuoiSo = "";
    for(let i = 0 ; i < 10; i++){
        chuoiSo += `${i === 0 ? "" : ' -'} ${string}`
    }
    return chuoiSo;
}
const kq = copy("dat");
console.log(kq);

//bai3

function giaithua(n){
    let kq = 1;
    for(let i = 1 ; i <= n; i++){
        kq *=i;
    }
    console.log(kq);
}
giaithua(5);


// bai4
const arrNumber = [1, 4, 44, 64, 55, 24, 32, 55, 19, 17, 74,22, 23];
let evenNumbers = [];
let oddNumbers = [];

for(let i = 0 ; i < arrNumber.length ; i++ ){
    if(arrNumber[i] % 2 === 0 ){
        console.log(arrNumber[i]);
        evenNumbers[evenNumbers.length] = arrNumber[i];
    }
    else{
        oddNumbers[oddNumbers.length] = arrNumber[i];
    }
}
console.log(evenNumbers);
console.log(oddNumbers);





// Bài 3: Tìm tất cả các số chia hết cho 7 nhưng không chia hết cho 5 trong khoảng từ m đến n, với m và n là số nguyên 
// dương cho trước.
//  Input: 10, 30
//  Output: 14, 21, 28
//  Input: 50, 70
//  Output: 56, 63

function chiaSo(n,m){
    for(let i = n ; i <= m ; i++){
        if(i % 7 === 0 && i % 5 !== 0){
            console.log(i);
        }
    }
}
chiaSo(50,70);

// Bài 4: Tính tổng các chữ số của một số nguyên dương n và kiểm tra xem tổng đó có phải là số nguyên tố không.
// Input: 123
// Output: Tổng các chữ số: 6, Không phải số nguyên tố
// Input: 379
// Output: Tổng các chữ số: 19, Số nguyên tố

function songto(chuoiSo){
    let kq = 0;
    for (const item of chuoiSo) {
        kq +=+item;
    }
    return kq;
}

function isPrime(num){
    if(num < 2){
        return false;
    }
    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

function main(chuoiSo) {
    const inra = songto(chuoiSo);
    console.log(`Tổng dãy số: ${inra} , ${isPrime(inra) ? "Số nguyên tố" : "Không là số nguyên tố"}`);
}
main("379");

//Bài 9: Viết một hàm nhận vào một tham số là một mảng  các phần tử là số, trả về tổng của các phần tử trong mảng

function tinhTongarr(arr){
    let tatol = 0;
    for(let i = 0 ; i < arr.length ; i++){
        tatol +=arr[i];
    }
    return tatol;
}
const ketqua = tinhTongarr([2,3,4]);
console.log(ketqua);





