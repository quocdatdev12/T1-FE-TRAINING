// `https://dummyjson.com/products/category/${value}`

const API_CATEGORY = "https://dummyjson.com/products/category-list";
const API_CATEGORY1 = "https://dummyjson.com/products/category";
const list_category = document.getElementById("list_category");
const box_category = document.querySelector(".box_category");
const title = document.getElementById("title");
let currenCategory = "";

const fetchDatAllcategory = async () => {
  // fetch(API_CATEGORY,{
  //     method: "GET",
  // }).then((res) => {
  //     return res.json();
  // })
  // .then(data => {renderCategory(data)})
  // .catch(err => console.log(err));
  try {
    const res = await fetch(API_CATEGORY);
    const data = await res.json();
    renderCategory(data);
  } catch (error) {
    console.log(error);
  }
};
fetchDatAllcategory();

const renderCategory = (data) => {
  // console.log(data,"da");
  renderProductByCategory(data[0]);
  list_category.innerHTML = data
    .map((cate, index) => {
      //truyền 1 chuỗi vào thì sẽ k bị lỗi
      return `
         <button id="${cate}" class="${
        index === 0 ? "active" : ""
      }" onclick="handlButton('${cate}')">${cate}</button>
        `;
    })
    .join("");
};

const renderProductByCategory = async (cate) => {
  // console.log(cate,"value");
  // fetch(`${API_CATEGORY1}/${cate}`)
  // .then(res => {
  //     return res.json();
  // })
  // .then(data => renderButtonCategory(data.products,data.total))
  // .catch(err => console.log(err))
  try {
    const res = await fetch(`${API_CATEGORY1}/${cate}`);
    const data = await res.json();
    renderButtonCategory(data.products, data.total);
  } catch (error) {
    console.log(error);
  }
};

const renderButtonCategory = (products = [], cartName) => {
  title.innerText = `Tổng: ${cartName}`;
  box_category.innerHTML = products
    .map((product) => {
      return `
           <div class="item_product">
                <div class="box_img">
                    <img src=${product.thumbnail} />
                </div>
                <p>Tên sản phẩm: ${product.title}</p>
                <p>Danh mục: ${product.category}</p>
                <p>Giá: ${product.price}</p>
           </div> 
        `;
    })
    .join("");
};

const handlButton = (cate) => {
  const allButton = document.querySelectorAll("button");
  // console.log(allButton,"allButton");
  allButton.forEach((button) => button.classList.remove("active"));
  const activeBtn = document.getElementById(cate);
  activeBtn.classList.add("active");
  renderProductByCategory(cate);
};
