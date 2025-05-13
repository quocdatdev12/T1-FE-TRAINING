const fullname = document.getElementById("fullname");
// console.log([fullname]);

const valCity = document.getElementById("valCity");

const listGender = document.querySelectorAll("[type = 'radio'][name = 'gender']");
console.log(listGender);
// input : chúng ta để ý đến value và checked . nếu muốn bt chúng tao tác với ô input nào thì ta để ý đến type: name



const result = document.getElementById("result");


const handleSubmit = () => {
    const userName = fullname.value;
    const city = valCity.value;
    let gender = "";
    listGender.forEach((item) => {
        if(item.checked){
            gender = item.value;
        }
    })
    // console.log(userName,city,gender);
    result.innerHTML = `
     <p>Họ và tên: ${userName}</p>
     <p>Địa chỉ: ${city}</p>
     <p>Giới tính: ${gender}</p>
    `
    
}