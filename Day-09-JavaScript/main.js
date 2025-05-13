{
    // học kĩ biến
// phạm vi 
// hoting
console.log("Hello Word!")

// Phần 2: Biến trong js: biến là nơi ta lưu trữ tạm thời một dữ liệu gì đó một cách tạm thời trong bộ nhớ máy tính. có thể thay đổi được

// Cách khai báo biến
// var ,  let , const

// var => cũ rồi => lỗ thời ( ít dung để khai báo) => sinh ra nhìu lỗi
// let , const => (ES6) => Đc dùng nhiều để khai báo

var name = "Đạt"

let age = 19;

console.log(name);
console.log(age);


const total = 100;
console.log(total);

let adress;
console.log(adress);

let a = 1;
a = "helo wrod";

console.log(a);

// const : khi khai báo phải gán giá trị
// var và let khai báo không cần gán giá trị
const viewer = 10;

console.log(viewer);
//Global Scope (Phạm vi toàn cục):Biến được khai báo trong global scope có thể được truy cập từ bất kỳ đâu trong mã nguồn JavaScript. Chúng tồn tại trong suốt quá trình chạy của chương trình.

let amount = 11;
console.log(amount);

{
    console.log(amount);
    {
        console.log(amount);
    }
}

}
//Local hay Function Scope (Phạm bị hàm):Biến khai báo trong một hàm chỉ tồn tại trong phạm vi của hàm đó.
function myFunction() {
    var a = 1;
    console.log(a);
}
myFunction();


//Block scope (phạm vi khối): Với giới thiệu của từ khóa "let" và "const" trong ES6, biến khai báo bằng "let" hoặc "const" được giới hạn trong phạm vi của khối mã mà chúng được khai báo.

if(true) {
    let text = "xin chào 0";
    console.log(text);
    if(true) {
        let text = "Xin chào 1";
        console.log(text);
    }
    
}

//Hoisting => bug
// console.log(x);

// const x = 20;

// Cách đặt tên

const userName = "Quoc Dat";


// III: Kiểu dữ liệu

//1.Kiểu dữ liệu string.

{
    let van_ban = "Hello Word !";
    console.log(van_ban);
     
    let van_ban1 = 'Hello Word 1 !';
    console.log(van_ban1);
    
    const name = "Nghiêm";
    const age = 30;
    const number = 5;
    const isMarried = true;

    const message = `Hello ${name} tuổi ${age + number}, tình trạng: ${isMarried ? "Kết hôn" : "Độc thân"} `;

    console.log(message);
    
}

// 2.Kiểu dữ liệu number.

{
    const number = 1;
}

//Kiểu dữ liệu boolean (kiểu logic).

{
    // gán trực tiếp
    const isCheck = true;
    console.log(isCheck);

    // nhận từ biểu thức

    const a = 7 < 8;
    console.log(a);

    const value = "" // => falsy => false

    if(value === "") {
        console.log("Khong co dc tinh cam tu em");
        
    }
}

//5:Kiểu dữ liệu: null và undefined
{
    // gán null khi ch xác định kiểu dữ liệu của biến
    let id = null;

    //undefined

    function myFunction() {
        return;
    }
    console.log(myFunction());
    
}

//6.Kiểu dữ liệu Object


    const moreMetting = {
        // key -  value
        shape: "tròn",
        clor: "bule",
        voice: true,
    };

    const product = {
        id: 1,
        title: "Sam sung",
        originPrice: "7000",
        price: "6000",
        sale: "16%",
        amount:  23,
        avatar: "https://cdn.tgdd.vn/Products/Images/42/321771/samsung-galaxy-a55-5g-den-thumb-1-600x600.jpg",
        locked: true,
    }

    console.log(product);

    const infoUser = {
        name: "Đạt",
        age: 19,
        address: {
            state: "Quận 12",
            counttry: "Việt Nam",
        },
        company: {
            name: "FPT",
            address: {

            }
        }

    }

    // Cách lấy giá trị của đối tượng
    // + 2 cách lấy giá trị

     // - Sử dụng tên đối tượng chấm (.) tới từ => từ ngoài vào trong

     console.log(infoUser.address.state);

    // - sử dụng dynamic key

    console.log(infoUser["address"]["state"])

    let key = "name";
    const myInfo = {
        //name: ""
    }
    
    myInfo.name = "Dat";
    console.log(myInfo);

    const object = {
        name: "",
        age: "",
        status: "",
        title: "axxxx",
    }
    console.log(object);

//7. Kiểu dữ liệu Mảng [array]


    const number = [4,6,8,10];
    console.log(number);
    // item: từng giá trị của mảng
    // index: vị trí của giá trị
    // length: độ dài của mảng 

    // lấy giá trị của mảng bằng vị trí index

    number[4] = 5   // thêm vào mảng

    console.log(number[1]);

    const products = [
        {
            id: 1,
            title: "Sam sung",
            originPrice: "7000",
            price: "6000",
            sale: "16%",
            amount:  23,
            avatar: "https://cdn.tgdd.vn/Products/Images/42/321771/samsung-galaxy-a55-5g-den-thumb-1-600x600.jpg",
            locked: true,
        },

        {
            id: 2,
            title: "Sam sung1",
            originPrice: "7000",
            price: "6000",
            sale: "16%",
            amount:  23,
            avatar: "https://cdn.tgdd.vn/Products/Images/7077/315596/befit-watch-ultra-day-silicone-tb-600x600.jpg",
            locked: true,
        },

        {
            id: 3,
            title: "Sam sung2",
            originPrice: "7000",
            price: "6000",
            sale: "16%",
            amount:  23,
            avatar: "https://cdnv2.tgdd.vn/mwg-static/tgdd/Products/Images/44/322269/asus-tuf-gaming-a15-fa506nf-r5-hn012w-170225-104821-173-600x600.jpg",
            locked: true,
        }
    ]


    const display = document.getElementById("display")
    display.innerHTML = products.map(function(item) {
        return`
        <p>${item.title}</p>
        `
    })
    
    

    // const display = document.getElementById("display");
    //  display.innerHTML = `
    //  <img src=${product.avatar} />
    //  <p>Name:${product.title}</p>
    //  <p>Price:${product.price} - ${product.originPrice}</p>
    //  <p>Sale:${product.sale}</p>
    //  <p>Amount: ${product.amount} còn hàng</p>
    //  <p>${product.locked ? "ngừng kinh doanh" : ""}</p>
    //  `



{
    const products = { 
        products: [ 
        {
        id: 1, 
        title: "Essence Mascara Lash Princess",
        dimensions: { 
        width: 23.17, 
        height: 14.43, 
        depth: 28.01, 
        }, 
        reviews: [ 
            {
        rating: 2, 
        
        comment: "Very unhappy with my purchase!", 
        
        date: "2024-05-23T08:56:21.6187", 
        
        reviewerName: "John Doe", 
        
        reviewerEmail: "john.doe@x.dummyjson.com", 
            }
        ], 
        }
        ], 
        total: 194, 
    
        skip: 0, 
    
        limit: 1, 
    };
}


{
    const products = { 
        product: [
            {
                id: 1,
                title: "Essence Mascara Lash Princess",
                dimensions: { 
                    width: 23.17, 
                    height: 14.43, 
                    depth: 28.01, 
                }, 

                reviews:[
                    {
                        rating: 2, 
        
                    comment: "Very unhappy with my purchase!", 
        
                    date: "2024-05-23T08:56:21.6187", 
        
                    reviewerName: "John Doe", 
        
                    reviewerEmail: "john.doe@x.dummyjson.com", 
                    }
                ]
            }
        ],
        total: 194, 
        skip: 0, 
        limit: 1,
    };
    console.log(products.product[0].reviews[0].reviewerEmail);
}

{
    const point = 11;

    if(point >= 0 && point <= 4.5){
        console.log("Học Lực Yếu");
    }
    else if(point > 4.5 && point <= 6.5){
        console.log("Học Lực Trung Bình");
    }
    else if(point > 6.5 && point < 8){
        console.log("Học Lực Khá");
    }
    else if(point >= 8 && point <= 10){
        console.log("Học Lực Giỏi");
    }
    else{
        console.log("Không Xác Định");
    }

}