const img_main = document.getElementById("img_main");
// const handleChangeImg = (src) => {
//     img_main.src = src;
// }

const handleChangeImg = (id) => {
    const img = document.getElementById(id);
    //dùng getAttribute lấy giá trị của src
    const src = img.getAttribute("src");
    console.log(src);
    //dùng setAttribute để đổi src lại
    img_main.setAttribute("src",src);
    
}