const id = 1744726859962
// =============
const arr = 
[
    {
        "id": 1744726859962,
        "status": true,
        "title": "đ"
    },
    {
        "id": 1744726915602,
        "status": true,
        "title": "dsdsd"
    }
]

const arrNew = arr.map((item) => {
    return {
        ...arr,
        status: item.id === id ? "true" : "false",
    }
})
console.log(arrNew);

// =================
// [
//     {
//         "id": 1744726859962,
//         "status": false,
//         "title": "đ"
//     },
//     {
//         "id": 1744726915602,
//         "status": true,
//         "title": "dsdsd"
//     }
// ]