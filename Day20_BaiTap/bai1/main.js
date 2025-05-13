// API: https://dummyjson.com/products/search?q=${value_searchName}&limit=10&skip=${skip}&sortBy=${}&order=${}
// API DETAIL:  https://dummyjson.com/products/${id}
// phương thức GET nhé
// doc: https://dummyjson.com/docs/products
{
  //chức năng search
  // q:"",
  // //khi vào trang muốn hiện bao nhiêu sản phẩm thì gán giá trị cho nó
  // limit: 10,
  // //phân trang 0 => (0 -> 9), 10 => (10 -> 19)
  // skip:0
  // //sắp xếp theo tilte hoặc price
  // sortBy: "tilte" or price
  // // kiểu tăng dần hoặc giảm dần
  // order: "asc" or "desc"
}
// API DETAIL:  https://dummyjson.com/products/${id}
// ?q=${value_searchName}&limit=10&skip=${skip}&sortBy=${}&order=${}
let currentPage = 1;
let limit = 10;
const API_URL = `https://dummyjson.com/products/search?limit=${limit}`;
const display = document.getElementById("display");
const domtotal = document.getElementById("total");
const valSearch = document.getElementById("valSearch");
const filterSelect = document.getElementById("filterSelect");
const pagination = document.getElementById("pagination");
const loader = document.querySelector(".loader");
const params = {
  searchTitle: "",
  limit: 10,
  skip: 0,
  sortBy: "",
  order: "",
};

// trường hợp khi bên be k cho gửi giá trị sỗng
// for (const key in params) {
//   if(!params[key] === ""){
//     delete params[key];
//   }
// }

const fetchDataProduct = async (params) => {
  loader.style.display = "block";
  // console.log(params,"params");
  const { searchTitle, skip, sortBy, order } = params;

  // fetch(
  //   `${API_URL}&q=${searchTitle}&skip=${skip}&sortBy=${sortBy}&order=${order}`
  // )
  //   .then((res) => {
  //     // console.log(res.json());
  //     return res.json();
  //   })
  //   .then((data) => {
  //     // console.log(data);
  //     const { products, total } = data;
  //     domtotal.innerHTML = `Tatol: ${total}`;
  //     renderProduct(products);
  //     const totalPage = Math.ceil(total / limit);
  //     // console.log(totalPage,"totalPage");
  //     renderPaginatipn(totalPage);
  //     loader.style.display = "none";
  //   })
  //   .catch((err) => console.log(err));
  try {
    const res = await fetch(
      `${API_URL}&q=${searchTitle}&skip=${skip}&sortBy=${sortBy}&order=${order}`
    );
    const data = await res.json();
    const { products, total } = data;
    domtotal.innerHTML = `Tatol: ${total}`;
    renderProduct(products);
    const totalPage = Math.ceil(total / limit);
    // console.log(totalPage,"totalPage");
    renderPaginatipn(totalPage);
    loader.style.display = "none";
  } catch (error) {
    console.log(err);
  }
};
fetchDataProduct(params);

const renderProduct = (products = []) => {
  // console.log(products,"1");
  display.innerHTML = products
    .map((product) => {
      return `
        <div class="product-item">
            <img src=${product.thumbnail}>
            <div class="box-info">
                <p>Title: ${product.title}</p>
                <p>Category: ${product.category}</p>
                <p>Price: ${product.price} USD</p>
            </div>
            
        </div>
        `;
    })
    .join("");
};

// dạng json => [{id : ""}] , string: [{"id": ""}]

const handlSearch = () => {
  const searchTitle = valSearch.value;
  fetchDataProduct({
    ...params,
    searchTitle,
  });
};

// console.log([filterSelect],"filterSelect");
filterSelect.onchange = (e) => {
  console.log(e.target.value, "eee");
  const { value } = e.target;
  const sortBy = value.split(",")[0];
  const order = value.split(",")[1] ?? "";
  // ?? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing

  fetchDataProduct({
    ...params,
    sortBy,
    order,
  });
};

const handlReset = () => {
  valSearch.value = "";
  filterSelect.value = "";
  fetchDataProduct(params);
};

const renderPaginatipn = (totalPage) => {
  // console.log(totalPage);
  let numbers = [];
  for (let i = 1; i <= totalPage; i++) {
    numbers.push(i);
  }
  // console.log(numbers);
  pagination.innerHTML = numbers
    .map((page) => {
      return `<button class = "${
        currentPage === page ? "active-page" : " "
      }" onclick="handlChangePage(${page})">${page}</button>`;
    })
    .join("");
};

const handlChangePage = (page) => {
  // console.log(page);
  const skip = (page - 1) * 10;
  currentPage = page;
  // console.log(currentPage,"currentPage");
  // console.log(skip);
  fetchDataProduct({
    ...params,
    skip,
  });
};
