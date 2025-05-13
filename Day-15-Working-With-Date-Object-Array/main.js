//Date


// const date = Date.now();
// console.log(date);

const date = new Date();

console.log(date.getFullYear());
console.log(date.getDay());
console.log(date.getMonth());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
// 15-3-2025T13:40:10.345Z là dạnh utc
// dayjs().add(1, 'days').format('YYYY-MM-DD')

//Object

const product = {
    name: "iphone 11",
    price:1000,
    a:"",
    b:"",
}
// for (const key in product) {
//     console.log(key);
//     if(product[key] === ""){
//         delete product[key];
//     }
// }
// console.log(product);


// //lấy ra các key của product
// console.log(Object.keys(product));
// //lấy ra các giá trị product
// console.log(Object.values(product));
// //lấy ra các capwk key - value
// console.log(Object.entries(product));

const keys = Object.keys(product);

for(let i = 0 ; i < keys.length ; i++){
    const key = keys[i];
    console.log(key);
    if(product[key] === ""){
        delete product[key];
    }
}
console.log(product);


//ARRay
//join
 const sizes = ["X", "M", "XL" ];
//X-M-XL

console.log(sizes.join("-"));

// arr.pop();, arr.shift()
const number = [1,2,3,4,5,6];
console.log(number.pop());
console.log(number);
console.log(number.shift());
console.log(number);

//push: thêm phần tử vào cuối mảng
number.push(6,7,{a: "dat"});
console.log(number);
// unshift(): thêm ptu vào đầu mảng
number.unshift(1);
console.log(number);

//concat(): tạo một mảng mới bằng cách nối 2 mảng lại vs nhau
const newNumber = number.concat([12,15]);
console.log(newNumber);

//slice():Phương thức slice() của các thể hiện Array trả về một bản sao nông của một phần của mảng thành một đối tượng mảng mới được chọn từ đầu đến cuối (không bao gồm phần cuối) trong đó start và end biểu diễn chỉ mục của các mục trong mảng đó. Mảng gốc sẽ không bị sửa đổi.

const animals = ["ant", "bison", "camel", "duck", "elephant"];
console.log(animals.slice(2,-2));

//trim: giúp cắt đi khoảng trắng hai đầu
const mess = "  heloo wrod  ";
console.log(mess.trim());

//giúp viết hoa
console.log(mess.toLocaleUpperCase());
console.log(mess.toLocaleLowerCase());

{
    const numbers = [1,2,3,4,5,6,7,8];
    const value = 3;
    console.log(numbers.includes(value));

    const url = "https://www.thegioididong.com/cap-dien-thoai";
    if(url.includes("cap-dien-thoai")){
        console.log("Active category");
    }

    let number = 1;
    
    if([1,4,6,8].includes(number)){
        console.log("Thõa mãn diều kiện");
    }
 
}

{
    //forEach

    const number = [5,10,34,78];

    let sum = 0;

    number.forEach(function(item,index,array) {
        sum +=item;
    });
    console.log(sum);
}

{
    // Map:của array được sử dụng để tạo ra một array mới với các phần tử được tạo ra từ
// các phần tử có vị trí tương ứng của array cũ => array mới sẽ có số phần tử luôn bằng số
// phần tử của array cũ

    //[1,2,3,4,5] => [2,4,6,8,10];

    const numbers = [1,2,3,4,5];
    const newNumber = numbers.map(function (item,index,) {
        return item * 2;
    })
    console.log(newNumber);
    // console.log(numbers);

    const names = ["Đạt", "Phong"];
    // [
    //     {
    //         id:1,
    //         name:"Đạt"
    //     },
    //     {
    //         id:2,
    //         name:"Phong"
    //     }
    // ]
    const newData = names.map(function(item,index){
        return {
            id:index+1,
            name:item
        }
    })
    console.log(newData);

    const number1 = [1,2,3,4,5];
    //[true, false,true,false,true]

    const newNumber1 = number1.map(function(item,index){
        return item % 2 !== 0 ? "True" : "False";
    })
    console.log(newNumber1);

    const traiCay = ["apple", "banana", "cherry"];
    const newtraCay = traiCay.map(function(item,index){
        return item.toLocaleUpperCase();
    })
    console.log(newtraCay);

    const wrods = ["Hello", "World", "Js"];
    const newWrods = wrods.map(function(item,index){
        return item.length;
    })
    console.log(newWrods);
}

{
    // ARRAY FILTER: sẽ trả về mảng true hoặc mảng false (dùng fiter để lọc)
    const numbers = [1,2,3,4,5,6];

    const newNumber = numbers.filter(function(item){
        // if(item % 2 === 0){
        //     return true;
        // }
        return item % 2 === 0;
    })
    console.log(newNumber);

    const students = [
        {
            name:"dat",
            status:true,
        },
        {
            name:"dat1",
            status:false,
        },
        {
            name:"dat2",
            status:false,
        }
    ]
    const newStudent = students.filter(function(item){
        // return item.status === false;
        // return !item.status ;
    })
    console.log(newStudent);
    
}

{
    // ARRAY FIND
    const numbers = [1,2,3,4,5,6];
    const number = numbers.find(function(item){
        return item % 2 === 0;
    })
    console.log(number);

    const students = [
        {
            name:"dat",
            status:true,
            id:123
        },
        {
            name:"dat1",
            status:false,
            id:234
        },
        {
            name:"dat12",
            status:false,
            id:545
        }
    ]
    const id = 545;
    const student = students.find(function(item){
        return item.id === id;
    })
    console.log(student);

}

{
    // ARRAY SOME
    // Hàm some: trả về true khi có ít nhất một phần tử thỏa mãn điều kiện và ngược lại
    const products = [
        {
            name:"Iphone 13",
            amount:0,
        },
        {
            name:"Iphone 14",
            amount:10,
        }
    ]
    // kiểm tra ds sp này có sẩn phẩm hết hàng hay không

    const isCheckproduct = products.some(function(item){
        return item.amount === 0;
    })
    console.log(isCheckproduct);
    
    //Hàm every: trả về true khi tất cả các phần tử thỏa mãn điều kiện và ngược lại
    const isCheckproductevery = products.every(function(item){
        return item.amount === 0;
    })
    console.log(isCheckproductevery);
    
    if(isCheckproductevery){
        console.log("Kho này hết tất cả sản phẩm");
    }
    else{
        console.log("Kho này còn sản phẩm");
    }
}












