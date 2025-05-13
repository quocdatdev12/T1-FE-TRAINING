const API_CARTS = 'https://dummyjson.com/carts';
const tbody = document.querySelector("tbody");
const domProduct = document.querySelector(".box_product");
const title = document.getElementById("title");
const loader = document.querySelector(".loader");

const fetchDataAllcarts = () => {
    //hàm fetch khi k cần truyền metho vào thì mặc định là metho: get
    fetch(API_CARTS,{
        method: "GET",
    }).then((res) => {
        // console.log(res.json());
        return res.json();        
    })
    .then(data => {
        const {carts} = data;
        renderCarts(carts);
    })
    .catch(err => console.log(err));
}
fetchDataAllcarts();

const renderCarts = (carts = []) => {
    tbody.innerHTML = carts.map((item,index)=> {
        return `
            <tr>
                <td>${item.id}</td>
                <td> Đơn hàng sô ${index + 1}</td>
                <td>${item.total} $</td>
                <td>${item.totalProducts}</td>
                <td>
                <button onclick="handlDetail(${item.id})">Detail</button>
                </td>
            </tr>
        `
    }).join("");
}

const handlDetail = (id) => {
    loader.style.display = "block";
    // console.log(id,"id");
    fetch(`${API_CARTS}/${id}`)

    .then(res => {
        return res.json();
    })
    .then(data => {
        renderDetailCarts(data.products, data.id);
        loader.style.display = "none";
    })
    .catch(err => console.log(err));
}

const renderDetailCarts = (products = [], cartName) => {
    title.innerText = `Đơn hàng số: ${cartName} `
    domProduct.innerHTML = products.map(product => {
        return `
        <div class="item_product">
           <div class="box_img">
              <img src=${product.thumbnail} />
           </div>
           <p>Name: ${product.title} <span>x ${product.quantity}</span></p>
           <p>Price: ${product.price}</p>
        </div>
        `
    }).join("");
}