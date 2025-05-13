// Dom sinh ra để thao tác giữa code html với javascript vs nhau
//DOM : Document Object Model

console.log([document]);

document.title = "Day 16 ES6 & DOM";

const text = document.getElementById("hello-world");
console.log([text]);

text.style.color = "red";
text.style.fontSize = "50px";
text.innerText = "Quốc Đạt";

const valueInput = document.getElementById("valUserName")
console.log(valueInput);

// valueInput.onchange = (e) => {
//     console.log("xxx",e.target.value);
    
// }

const btnSubmit = document.getElementById("btnSubmit");
console.log([btnSubmit]);
// btnSubmit.onclick = () => {
//     console.log("dat dat");
// }

//innerHTML : có thể viết thẻ html và text
//innerText : chỉ có thể viết text
const handleSubmit = () => {
    // console.log([valueInput]);
    console.log(valueInput.value);
    const display = document.getElementById("display");
    console.log([display]);
    display.innerHTML = `<p>Name:${valueInput.value}</p>`
    
}

//================ document.getElementsByClassName(a): tìm TẤT CẢ các element(node) có thuộc tính class chứa a (trả về 1 mảng)

const demoClass = document.getElementsByClassName("class-p");
console.log({demoClass});
// HTMLCollection: mảng Collection chỉ dùng được vòng lặp for vs do while
for(let i = 0 ; i < demoClass.length ; i++){
    if(i % 2 === 0){
        demoClass[i].style.color = "red";
    }else{
        demoClass[i].style.color = "blue";
    }
}

//================= document.getElementsByTagName(a): tìm TẤT CẢ các element(node) có tên thẻ là a

const demoTagName = document.getElementsByTagName("p");
console.log([demoTagName]);

for (let i = 0; i < demoTagName.length; i++) {
    const element = demoTagName[i];
    element.style.fontSize = "40px";
}

// ========================document.querySelector(a): Tìm element ĐẦU TIÊN thỏa mãn selector a (a là selector giống css)

console.log([document.querySelector("#btnSubmit")]);
console.log([document.querySelector("p")]);

//========================== document.querySelectorAll(a):  Tìm tất  cả các element thỏa mãn selector a (a là selector giống css)
// trả về mảng NodeList: mảng này có thể dùng for và for Each

const tagP = document.querySelectorAll("p");
console.log([tagP]);

tagP.forEach((element) => {
    element.style.background = "#cbcbcb";
})

//Mousemove

const Mousemove = document.getElementById("mouseMove");

Mousemove.style.width = "300px";
Mousemove.style.height = "300px";
Mousemove.style.background = "red";

// Mousemove.onmousedown = () => {
//     console.log("xxxxxxxxxxxxx");
// }

console.log(window);

window.addEventListener("scroll", (e) => {
    console.log(e,"xxxxxxxxxxxxxxx",window);
})

window.addEventListener("resize", (e) => {
    console.log(e.target.innerWidth,"resize");

    if(e.target.innerWidth < 450){
        Mousemove.style.background = 'green';
    }
    else{
        Mousemove.style.background = 'red';
    }
})


// getattribute javascript
// setattribute javascript








