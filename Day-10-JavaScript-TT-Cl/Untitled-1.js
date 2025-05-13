{
    let str = "Hello"
    str +=" Word !"
    let msg = str;
    console.log(msg);
    
}

const products = { 
    products: [ 
    {
    id: 1, 
    title: "Essence Mascara Lash Princess",
    dimensions: { 
    width: 23.17, 
    height: 14.43, 
    depth: 28.01, 
    }, 
    reviews: [ 
        {
    rating: 2, 
    
    comment: "Very unhappy with my purchase!", 
    
    date: "2024-05-23T08:56:21.6187", 
    
    reviewerName: "John Doe", 
    
    reviewerEmail: "john.doe@x.dummyjson.com", 
        }
    
    ], 
    }
    ], 
    total: 194, 

    skip: 0, 

    limit: 1, 
};

console.log(products.products[0].reviews[0].reviewerEmail);


{
    const point = 9;
    if(point >= 4 && point <= 5.5){
        console.log("Loại D");
    }
    else if (point > 5.5 && point <= 7){
        console.log("Loại C");
    }
    else if (point > 7 && point <= 8.5){
        console.log("Loại B");
    }
    else if (point > 8.5 && point <= 10){
        console.log("Loại A");
    }
    else{
        console.log("Không xác định được loại !");
    }

    point >= 4 && point <= 5.5 ? console.log("Loại D") 
    : point > 5.5 && point <= 7 ? console.log("Loại C") 
    : point > 7 && point <= 8.5 ? console.log("Loại B") 
    : point > 8.5 && point <= 10 ? console.log("Loại A") 
    : console.log("Không xác định được loại !");
}

console.log(typeof[null]);

let x = 1 + '2' - 1;
console.log(x);
