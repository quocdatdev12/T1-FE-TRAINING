const arr = [
{   id: 1743213455843,
    title: 'd', 
    status: 'Todo'
},

{   id: 1743213459372, 
    title: '', 
    status: 'Done'
}
]
let id1 = 1743213455843;

const arrnew = arr.filter((item) => {
    return item.id !== id1
})
console.log(arrnew);
