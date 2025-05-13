// ES6 là bản nâng cấp của java script
//=>sinh ra khắc phục những vấn đề lỗi phát sinh của phiên bản cũ và giúp viết ngắn gọn hơn phiên bản cũ
// Template String (``)

//Arrow Function
// cú pháp 
// const myFun = () => {

// }

const funExampleArrow = () => {
    console.log("Heloo Word");
}
funExampleArrow();
// () => {

// }

const numbers = [1,2,3,4,5,6];

// const newNumber = numbers.map((item) => {
//     return item * 2;
// });
// console.log(newNumber);

// bỏ return thì bỏ {} , bỏ {} thì bỏ return đi
const newNumber = numbers.map(item =>  item * 2 );
// console.log(newNumber);






//Tạo thuộc tính cho Object

const address = "Kon Tum";
const obj = {
    name:"Dat",
    age:20,
    // address: address,
    //thay vì viết như trên ta có es6 có thể viết ngắn như bên dưới ( trong trường hợp trùng tên key)
    address,
}
console.log(obj);

const myF = (name) => {
    return {
        name,
    }

}
console.log(myF("dat"));



//destructuring assignment
//

{
    const address = "Kon Tum";
    const myObject = {
        name:"Dat",
        age:20,
        isMarried:true,
        gender:"male",
        address,
    }
    // console.log(myObject.name);
    // console.log(myObject.age);
    // console.log(myObject.isMarried);
    // console.log(myObject);
    
    // nếu ta cố tình tạo một biến lấy một thông tin không tồn tại , biến đó sẽ có giá trị undefined
    //khi ta bị trùng biến lấy giá trị mà ta đặt lại tên khác thì ta lấy biến tên đc đặt đó để lấy dữ liệu
    const {name,age,address:when} = myObject;
    console.log(name);
    console.log(age);
    console.log(when);
    
    // console.log(a);

    const colors = ["green", "red", "blu", "black"];
    // console.log(colors[1]);
    // console.log(colors[3]);
    // console.log(colors[2]);
    //từng vị trí tương ứng vs nhau
    const [input1,input2,input3] = colors;
    console.log(input1);
    console.log(input2);
    

    
    
}

{
    const myObj = {
        name: "ngiêm",
        age:18,
        address: {
            city:"Cầu giấy",
            conntry:"Việt Nam",
            demo:{
                a:{
                    b:"bbbbbbbbbbbbb"
                }
            }
        }
    };
    //mong muốn lấy giá trị name , age, conntry
    //destructuring assignment: không nên dùng cho những trg hợp lồng nhau nhiều lần
    const {name,age,address:{conntry,demo:{a:{b}}}} = myObj;
    console.log(name);
    console.log(age);
    // console.log(conntry);
    console.log(conntry);
    console.log(b);

    const someThing = ({name,age}) => {
        // const {name,age} = input
        console.log(name);
        console.log(age);
        
    }
    someThing({name:"dat",age:20});
}

{
    // Spread, Rest syntax
    const myObj = {
        name: "ngiêm",
        age:18,
        address: {
            city:"Cầu giấy",
            conntry:"Việt Nam",
            demo:{
                a:{
                    b:"bbbbbbbbbbbbb"
                }
            }
        }
    };

    const newMyobj = {
        ...myObj,
        // các key đứng sau nếu trùng tên sẽ ghi đè dữ liệu của các key đứng trước
        name:"Vy",
        age:35,
    }
    console.log(newMyobj);
    

}

