//Bài 1: Cho 1 mảng products sau
 const products = [
    {
      name: "but chi",
      price: 10000,
      amount: 10,
      color: ["red", "green", "blue"],
      origin: "Thien long",
      code: "BC01",
    },
    {
      name: "but chi",
      price: 8000,
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
// "Sản phẩm a, msp b: giá bán c vnd, có các màu x-y-z, được phân phối bởi công ty d
// Hàng tồn:  e"
// Trong đó, a là tên sp, b là mã sp, c là giá bán, xyz là các màu
// của sản phẩm, d là nhà cung cấp, e là số lượng tồn kho.

products.forEach(function(item,index){
    console.log(item);
    console.log(`
        sản phẩm:${item.name},
        mã sản phẩm:${item.code},
        giá bán: ${item.price},
        color:${item.color.join("-")},
        phân phối công ty:${item.origin},
        Hàng tồn:${item.amount}
        `);
    
})

































// Bài 2: từ mảng student
const students = [
  { name: "Nghiêm 1", scores: [90, 85, 92] },
  { name: "Nghiêm 2", scores: [75, 80, 85] },
  { name: "Nghiêm 3", scores: [90, 95, 89] },
  { name: "Nghiêm 4", scores: [100, 100, 100] },
];


// từ students hiển thị danh sách học sinh có điểm trung bình lớn hơn 90
// output:  [
// 		    { name: 'Nghiêm 3', tbc: 91.33333333333333 },
//  		    { name: 'Nghiêm 4', tbc: 100 }
//         ]







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

const newLisths = listHS.filter(function(item){
    let max = listHS[0]
    for(let i = 1 ; i < listHS.length ; i++){
        if(listHS[i].diem > max){
            max = listHS[i];
        }
    }
    return max;
})
console.log(newLisths);

















