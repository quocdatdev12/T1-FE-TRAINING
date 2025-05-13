// Bài 1: Cho 1 mảng products sau
 const products = [
    {
      name: "but chi",
      price: 11000,
      amount: 10,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC01",
    },
    {
      name: "but chi",
      price: 11000,
      amount: 90,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC02",
    },
    {
      name: "but bi",
      price: 9000,
      amount: 20,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC03",
    },
    {
      name: "but bi",
      price: 8000,
      amount: 15,
      color: ["red", "green", "blue", "yellow"],
      origin: "Thien long",
      code: "BC04",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 15,
      color: ["red", "green"],
      origin: "Hong ha",
      code: "BC05",
    },
    {
      name: "but xoa",
      price: 8000,
      amount: 22,
      color: ["red", "green", "black"],
      origin: "Thien long",
      code: "BC06",
    },
  ];

//   Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân
// phối bởi công ty d
// Hàng tồn:  e"

products.forEach(function(item){
  // console.log(item);
  
  // console.log(
  //   `
  //   sản phẩm ${item.name},
  //   msp ${item.code},
  //   giá bán ${item.price} vnd,
  //   có các màu ${item.color.join("-")},
  //   được phân phối bởi công ty ${item.origin},
  //   Hàng tồn: ${item.amount},
  //   `
  // );
})

// Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// tất cả tên của sản phẩm được viết hoa.
// console.log(products);

//map là hàm trả về ( return)
//concat dùng để thêm vào mảng
const bai1Cau2 = products.map(function(item){
  return {
      // name: item.name.toLocaleUpperCase(),
      // price: item.code === "BC05" ? item.price + 2000 : item.price,
      // amount: item.amount,
      // color: item.code === "BC04" ? item.color.concat(["purple"]) : item.color,
      // origin: item.origin,
      // code: item.code,
      ...item,
      name: item.name.toLocaleUpperCase(),
      price: item.code === "BC05" ? item.price + 2000 : item.price,
      color: item.code === "BC04" ? item.color.concat(["purple"]) : item.color,
  }
});
// console.log(bai1Cau2);

// Câu 3: sử dụng hàm của array để lọc ra
// những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

const bai1Cau3 = products.filter(function(item){
  // if(item.amount < 10 && item.price >= 8000){
  //   return true;
  // }
  // return false;
  return item.amount < 10 && item.price >= 8000;
})
// console.log(bai1Cau3);

// Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

//tìm kiếm item thõa mãn 1 điều kiện nào đó dùng find => trả về một phần tử hoặc undefine
const bai1Cau4 = products.find(function(item){
  // if(item.origin === "Hong ha" && (item.price > 10000 || item.amount < 6)){
  //   return true;
  // }
  // return false;
  return item.origin === "Hong ha" && (item.price > 10000 || item.amount < 6);
})
// console.log(bai1Cau4);

// Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
// sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không

// some chỉ cần 1 tk thõa mãn điều kiện sẽ trả về true
const bai1Cau5 = products.some(function(item){
  return item.origin === "Thien long" && item.price > 10000;
})
// console.log(bai1Cau5);

// Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
// sản phẩm đều còn hàng hay không?

const bai1Cau6 = products.every(function(item){
  return item.amount > 0
})
// console.log(bai1Cau6);
// if(bai1Cau6){
//   console.log("Không sản phầm nào hết hàng");
// }
// else{
//   console.log("có 1 số sản phẩm hết hàng");
// }

// Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
// có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"

const bai1Cau7 = products.map(function(item){
    return {
      // name:item.name,
      // price:item.price,
      // amount:item.amount,
      // color:item.color.join("-"),
      // origin:item.origin,
      // code:item.code,
      ...item,
      locked:item.origin === "Thien long" ? "Cấm bán" : "Không cấm bán"
    }
   
})
// console.log(bai1Cau7);

// Câu 8: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// thứ tự tăng đần của giá.

const bai1Cau8 = products.sort(function(a,b){
  if(a.price > b.price){
    return 1;
  }
  return -1;
})
// console.log(bai1Cau8);

// Câu 9: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
//  thứ tự giảm đần của số lượng hàng tồn

const bai1Cau9 = products.sort(function(a,b){
  if(a.amount < b.amount){
    return 1;
  }
  return -1;
})
// console.log(bai1Cau9);


// Bài 2: từ mảng student
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] },
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiêm 4", scores: [100, 100, 100] },
];
// const arrStudents = [
//   { name: "Nghiêm 1", tbc: 88 },
//   { name: "Nghiêm 2", tbc: 89 },
//   { name: "Nghiêm 3", tbc: 99 },
//   { name: "Nghiêm 4", tbc: 100 },
// ];

// từ students hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// output:  [
// 		    { name: 'Nghiêm 3', tbc: 91.33333333333333 },
//  		    { name: 'Nghiêm 4', tbc: 100 }
//         ]

const arrStudents = students.map(function(item){
  let sum = 0;
  item.scores.forEach(function(scores){
    sum +=scores;
  })
  let tbc = sum / item.scores.length;
  return {
    name:item.name,
    tbc,
  }
})
// console.log(arrStudents);

const topStudents = arrStudents.filter(function(item){
  return item.tbc > 90;
})
// console.log(topStudents);

// Bài 3 : cho mảng học sinh, mong muốn 1 mảng mới có danh sách học sinh điểm cao nhất.

const listHS = [
  {
    name: "A",
    diem: 4,
  },
  {
    name: "B",
    diem: 6,
  },
  {
    name: "C",
    diem: 8,
  },
  {
    name: "D",
    diem: 8,
  },
];

//tìm max 8 => filter => [];
let max = listHS[0];
for(let i = 0 ; i < listHS.length ; i++){
  if(listHS[i].diem > max.diem){
    max = listHS[i];
  }
}



const topHs = listHS.filter(function(item){
  return item.diem === max.diem;
})
// console.log(topHs);
// const filterStudents = listHS.sort(function(a,b){
//   if( a > b){
//     return 1;
//   }
//   return -1;
// })
// console.log(filterStudents);
// const max = filterStudents[0].diem;

// const topHs = listHS.filter(function(item){
//   return item.diem === max;
// })
// console.log(topHs);

// Bài 4:cho mảng a Loại bỏ sku nào mà rỗng (Xóa luôn key sku luôn)
const a = [
  {
    price: "1234",
    inventoryQuantity: "1",
    sku: "JOYME-119",
    name: "",
  },
  {
    price: "1234",
    inventoryQuantity: "2",
    sku: "JOYME-120",
  },
  {
    price: "1234",
    inventoryQuantity: "3",
    sku: "JOYME-121",
  },
  {
    price: "1234",
    inventoryQuantity: "4",
    sku: "JOYME-122",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
  {
    price: "1234",
    inventoryQuantity: "1234",
    sku: "",
  },
];

for (const item of a) {
  // console.log(item);
  if(item.sku === ""){
    delete item.sku;
  }
}
// console.log(a);

a.forEach(function(item){
  if (item.sku === "") {
    delete item.sku;
  }
})
// console.log(a);


// Bài 5: loại bỏ phần tử rỗng bắt đầu index là 2

const bai5 = ["", "nghiem", "", "", "nghiem1", "", ""];
// const bai5 = ["", "nghiem", "nghiem1"];


const newBai5 = bai5.filter(function(item,index){
  if(item === "" && index >= 2){
    return false;
  }
  return true;
})
// console.log(newBai5);

// Bài 6 : loại bỏ số 0 và ""

const bai6 = [
  {
    properties: "màu sắc",
    option: ["xanh", "", "đỏ", "", ""],
  },
  {
    properties: "giới tính",
    option: ["nam", "nữ", "", 0],
  },
];

const newBai6 = bai6.map(function(item){
  return {
    properties:item.properties,
    option:item.option.filter(function(f){
      return f ;
    })
  }
}) 
// console.log(newBai6);

// Bài 7:
const bai7 = [
  {
    mau_sac: "xanh",
    gia_ban: 0,
    so_luong: 0,
    sku: "sku",
    rowSpan: 1,
  },
  {
    mau_sac: "",
    gia_ban: 0,
    so_luong: 0,
    sku: "sku",
    rowSpan: 1,
  },
];
// {
//   mau_sac: "",
//   gia_ban: 0,
//   so_luong: 0,
//   sku: "sku",
//   rowSpan: 1,
// },
// dùng object.values(..) => để lấy ra mảng giá trị ['',0,0,"sku",1].
// nếu key nào mà rỗng , thì luôn xóa item đó , 
// ouput:  [
//             {
//             "mau_sac": "xanh",
//             "gia_ban": 0,
//             "so_luong": 0,
//             "sku": "sku",
//             "rowSpan": 1
//             }
//         ]

const filterBai7 = bai7.filter(function(item){
  const arrValue = Object.values(item);
  //lấy mảng giá trị
  const isCheck = arrValue.some(function(value){
    return value === "";
  })
  // isCheck trả về true khi có giá trị rỗng
  return !isCheck;
  //nhưng muốn loại bỏ item có giá trị rỗng thì phải phủ định về fales (filter)
})
// console.log(filterBai7);




// Bài 8: dùng reduce
const bai18 = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 0,
        },
      ],
    },
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
        },
        {
          stockedQuantity: 0,
        },
        {
          stockedQuantity: 3,
        },
        {
          stockedQuantity: 1,
        },
      ],
    },
  },
];

// tính tổng tất cả stockedQuantity của array

const totalStockedQuantity = bai18.reduce(function(acc,curr){
  const total = curr.inventoryItem.inventoryLevels.reduce(function(subAcc,subCurr){
    return subAcc + subCurr.stockedQuantity;
  },0)
  return acc + total;
},0)
// console.log(totalStockedQuantity);


// Bài 9: dùng reduce
const Bai9 = [
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 43,
          id: "nghiem1",
        },
        {
          stockedQuantity: 5,
          id: "nghiem",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 10,
          id: "nghiem",
        },
      ],
    },
  },
  {
    inventoryItem: {
      inventoryLevels: [
        {
          stockedQuantity: 45,
          id: "nghiem",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
        {
          stockedQuantity: 0,
          id: "nghiem1",
        },
      ],
    },
  },
];

const b = "nghiem";

// Y/C: tính tổng tất cả stockedQuantity nếu id trùng với giá trị b

const totalstockedQuantityBai9 = Bai9.reduce(function(acc,curr){
  const total = curr.inventoryItem.inventoryLevels.reduce(function(subAcc,subCurr){
    if(subCurr.id === b){
      return subAcc + subCurr.stockedQuantity;
    }
    console.log(subAcc);
    return subAcc;
    // subAcc tổng hợp giá trí
  },0)
  return acc + total;
},0);
console.log(totalstockedQuantityBai9);


// Bài 10:
const productsBai10 = [
  {
    isHide: false,
    position: 1,
    id: "1234",
  },
  {
    isHide: false,
    position: 2,
    id: "12345",
  },
  {
    isHide: false,
    position: 3,
    id: "123456",
  },
  {
    isHide: false,
    position: 4,
    id: "1234567",
  },
];

const productId = "1234";

// ý a: nếu productId trùng với id của mảng products thì tạo mảng mới
// chuyển đổi isHide thành true

const bai10A = productsBai10.map(function(item){
  return {
    isHide: item.id === productId ? true : item.isHide,
    position: item.position,
    id: item.id,
  }
})
console.log(bai10A);

const ids = ["12345", "1234"];
// ý b: nếu giá trị phần tử ids trùng với id của mảng products
// thì tạo mảng mới chuyển đổi isHide thành true

const bai10B = productsBai10.map(function(item){
  return {
    isHide: ids.includes(item.id) ? true : item.isHide,
    position: item.position,
    id: item.id,
  }
})
console.log(bai10B);


// ý c:const ids = ["12345", "1234"];
//  nếu giá trị phần tử ids trùng với id của mảng products thì tạo mảng mới ,
//  xóa luôn item đó

const bai10C = productsBai10.filter(function(item){
  return !ids.includes(item.id);
})
console.log(bai10C);







































































// //Bài 1: Cho 1 mảng products sau
// const products = [
//     {
//       name: "but chi",
//       price: 10000,
//       amount: 8,
//       color: ["red", "green", "blue"],
//       origin: "Thien long",
//       code: "BC01",
//     },
//     {
//       name: "but chi",
//       price: 11000,
//       amount: 90,
//       color: ["red", "green"],
//       origin: "Hong ha",
//       code: "BC02",
//     },
//     {
//       name: "but bi",
//       price: 9000,
//       amount: 20,
//       color: ["red", "green", "blue"],
//       origin: "Thien long",
//       code: "BC03",
//     },
//     {
//       name: "but bi",
//       price: 8000,
//       amount: 15,
//       color: ["red", "green", "blue", "yellow"],
//       origin: "Thien long",
//       code: "BC04",
//     },
//     {
//       name: "but xoa",
//       price: 8000,
//       amount: 15,
//       color: ["red", "green"],
//       origin: "Hong ha",
//       code: "BC05",
//     },
//     {
//       name: "but xoa",
//       price: 8000,
//       amount: 22,
//       color: ["red", "green", "black"],
//       origin: "Thien long",
//       code: "BC06",
//     },
//   ];

// //   Câu 1: Sử dụng hàm forEach, hiển thị ra màn hình thông tin các sản phẩm theo cấu trúc.
// // "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân phối bởi công ty d
// // Hàng tồn:  e"
// // Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu
// // của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.

// products.forEach(function(item,index){
//     // console.log(item);
//     // console.log(`
//     //     sản phẩm:${item.name},
//     //     mã sản phẩm:${item.code},
//     //     giá bán: ${item.price},
//     //     color:${item.color.join("-")},
//     //     phân phối công ty:${item.origin},
//     //     Hàng tồn:${item.amount}
//     //     `);
    
// })

// // Câu 2: sử dụng một hàm đã học của array để tạo ra một mảng sản phẩm mới ,
// // với mức giá của sản phẩm có mã "BC05" tăng lên 2000, và sản phẩm có mã "BC04" thêm màu "purple",
// // tất cả tên của sản phẩm được viết hoa.

// const newProducts = products.map(function(item){
//     return {
//       name: item.name.toLocaleUpperCase(),
//       price: item.code === "BC05" ? item.price + 2000 : item.price,
//       amount: item.amount,
//       color: item.code === "BC04" ? item.color.concat(["purple"]) : item.color,
//       origin: item.origin,
//       code: item.code,
//     }
// })
// // console.log(newProducts);

// // Câu 3: sử dụng hàm của array để lọc ra
// // những sản phẩm có lượng hàng tồn kho nhỏ hơn 10 và có giá ít nhất 8000.

// const isChekcprime = products.filter(function(item){
//     if(item.amount < 10 && item.price >= 8000){
//         return true;
//     }
//     return false;
// })
// // console.log(isChekcprime);

// // Câu 4: sử dụng hàm của array để tìm 1 ra sản phẩm
// // của nhà cung cấp "Hong ha" và ( có giá trên 10000 hoặc có số hàng tồn <6 ).

// const cau4 = products.find(function(item){
//     if((item.origin === "Hong ha") && (item.price > 10000 || item.amount < 6) ){
//         return true;
//     }
//     return false;
// })
// // console.log(cau4);

// // Câu 5: sử dụng hàm của array để kiểm tra xem, có phải có ít nhất một
// // sản phẩm  của nhà cung cấp "Thien long" có giá trên 10000 không

// // const bai5 = products.some(function(item){
// //     return item.name === "Thien long" && item.price > 10000;
// // })
// // console.log(bai5);

// // Câu 6: sử dụng hàm của array để kiểm tra xem, có phải tất cả các
// // sản phẩm đều còn hàng hay không?

// // every
// const cau6 = products.every(function(item){
//     return item.amount > 0;
// })
// console.log(cau6);

// // Câu 7: sử dụng hàm của array để tạo ra một mảng sản phẩm mới,với mỗi sản phẩm
// // có thêm một thông tin là locked để lưu thông tin xem sản phẩm có đang bị cấm
// // không ,  thực hiện cấm bán với những sản phẩm thuộc nhà cung cấp "Thien long"


// const cau7 = products.map(function(item){
//     // console.log(`
//     //     name: ${item.name},
//     //     price:${item.price},
//     //     amount: ${item.amount},
//     //     color: ${item.color.join("-")},
//     //     origin:${item.origin},
//     //     code: ${item.code},
//     //     locked:${item.origin === "Thien long" ? "Cấm bán" : "Không cấm bán"},
//     //     `);
    
// })
// // console.log(cau7);




// // Câu 8: sử dụng hàm của array để sắp xếp các sản phẩm trên theo
// // thứ tự tăng đần của giá.











































// // Bài 2: từ mảng student
// const students = [
//   { name: "Nghiêm 1", scores: [90, 85, 92] },
//   { name: "Nghiêm 2", scores: [75, 80, 85] },
//   { name: "Nghiêm 3", scores: [90, 95, 89] },
//   { name: "Nghiêm 4", scores: [100, 100, 100] },
// ];


// // từ students hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// // output:  [
// // 		    { name: 'Nghiêm 3', tbc: 91.33333333333333 },
// //  		    { name: 'Nghiêm 4', tbc: 100 }
// //         ]
// const newStudent = students.map(function(item){
//     let sum = 0;
//     item.scores.forEach(function(scores){
//         sum +=scores;
//     })
//     const tcb = sum / item.scores.length;
//     return {
//         name:item.name,
//         scores:tcb
//     };
// })
// console.log(newStudent);

// const topStuden = newStudent.filter(function(item){
//     return item.scores > 90;
// })
// console.log(topStuden);




// // Bài 3 : cho mảng học sinh, mong muốn 1 mảng mới có danh sách học sinh điểm cao nhất.

// const listHS = [
//   {
//     name: "A",
//     diem: 4,
//   },
//   {
//     name: "B",
//     diem: 6,
//   },
//   {
//     name: "C",
//     diem: 8,
//   },
//   {
//     name: "D",
//     diem: 8,
//   },
// ];

// listHS.sort(function(a,b){
//     if(a > b){
//         return 1;
//     }
//     return -1;
// })
// const max = listHS[0].diem;
// console.log(max);

// const topHs = listHS.filter(function(item){
//     return item.diem === max;
// })
// console.log(topHs);


// // console.log(newLisths);

// // Bài 4:cho mảng a Loại bỏ sku nào mà rỗng (Xóa luôn key sku luôn)
// const a = [
//   {
//     price: "1234",
//     inventoryQuantity: "1",
//     sku: "JOYME-119",
//     name: "",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "2",
//     sku: "JOYME-120",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "3",
//     sku: "JOYME-121",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "4",
//     sku: "JOYME-122",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "1234",
//     sku: "",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "1234",
//     sku: "",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "1234",
//     sku: "",
//   },
//   {
//     price: "1234",
//     inventoryQuantity: "1234",
//     sku: "",
//   },
// ];


// for (const item of a) {
//     if(item.sku === ""){
//         delete item.sku;
//     }
// }
// // console.log(a);

// a.forEach(function(item){
//     if(item.sku === ""){
//         delete item.sku;
//     }
// });
// // console.log(a);


// // Bài 5: loại bỏ phần tử rỗng bắt đầu index là 2

// const bai5 = ["", "nghiem", "", "", "nghiem1", "", ""];

// const filterBai5 = bai5.filter(function(item,index){
//     if(item === '' && index >= 2){
//         return false;
//     }
//     return true;
// })
// console.log(filterBai5);



// // Bài 6 : loại bỏ số 0 và ""

// const bai6 = [
//   {
//     properties: "màu sắc",
//     option: ["xanh", "", "đỏ", "", ""],
//   },
//   {
//     properties: "giới tính",
//     option: ["nam", "nữ", "", 0],
//   },
// ];


// const newBai6 = bai6.map(function(item){
//     return {
//         properties:item.properties,
//         option:item.option.filter(function(f){
//             return f !== 0 && f !== "";
//         })
//     }
// })
// // console.log(newBai6);

// // Bài 7:
// const bai7 = [
//   {
//     mau_sac: "xanh",
//     gia_ban: 0,
//     so_luong: 0,
//     sku: "sku",
//     rowSpan: 1,
//   },
//   {
//     mau_sac: "",
//     gia_ban: 0,
//     so_luong: 0,
//     sku: "sku",
//     rowSpan: 1,
//   },
// ];

// // nếu key nào mà rỗng , thì luôn xóa item đó , 
// // ouput:  [
// //             {
// //             "mau_sac": "xanh",
// //             "gia_ban": 0,
// //             "so_luong": 0,
// //             "sku": "sku",
// //             "rowSpan": 1
// //             }
// //         ]


// // Bài 8: dùng reduce
// const bai8 = [
//   {
//     inventoryItem: {
//       inventoryLevels: [
//         {
//           stockedQuantity: 43,
//         },
//         {
//           stockedQuantity: 0,
//         },
//         {
//           stockedQuantity: 0,
//         },
//         {
//           stockedQuantity: 0,
//         },
//       ],
//     },
//   },
//   {
//     inventoryItem: {
//       inventoryLevels: [
//         {
//           stockedQuantity: 43,
//         },
//         {
//           stockedQuantity: 0,
//         },
//         {
//           stockedQuantity: 3,
//         },
//         {
//           stockedQuantity: 1,
//         },
//       ],
//     },
//   },
// ];

// // tính tổng tất cả stockedQuantity của array
// const totalStockedQuantity = bai8.reduce(function(acc,curr){
//     const total = curr.inventoryItem.inventoryLevels.reduce(function(subAcc,subCurr){
//         return subAcc + subCurr.stockedQuantity;
//     },0)
//     return acc + total;
// },0)
// console.log(totalStockedQuantity);
























