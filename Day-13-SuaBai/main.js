// Bài 1: Kiểm tra xem một số có phải là số nguyên tố lớn không. Nếu có, in ra số nguyên tố lớn nhất trong khoảng từ 1 đến 
// số đó.
//  Input: 20
//  Output: 19

function isPrime(n){
    if(n < 2)
        return false;
    for(let i = 2 ; i <= Math.sqrt(n) ; i++){
        if(i % 2 === 0){
            return false;
        }
        return true;
    }
}
console.log(isPrime(7) ? "ngto" : "ko ngto");


function maxisPrime(number){
    let max = number
}