const arr =
[
    {
        "id": 1744726255666,
        "status": true,
        "title": "dsds"
    },
    {
        "id": 1744726270866,
        "status": true,
        "title": "dsds"
    }
]
const id = 1744726270866;

const arrNew = arr.filter(item => item.id != id);
console.log(arrNew);
