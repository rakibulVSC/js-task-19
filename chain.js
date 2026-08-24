let getExpensiveItemTotal=(cart,minPrice)=>{
    // let total=0;
    // for(let product of cart){
    //     console.log(product,minPrice)
    //     if(product.price>=minPrice){
    //         total=total+(product.price*product.qty)
    //     }

    // }

    let total=cart.filter(product=>product.price >= minPrice).map(product=>product.price*product.qty).reduce((accumulator,currenValue)=>accumulator+currenValue,0)
    // console.log(filterProducts);
    // let modifiedProducts=filterProducts.map(product=>product.price*product.qty);
    // let total=modifiedProducts.reduce((accumulator,currenValue)=>accumulator+currenValue,0);
    console.log(total)
    // console.log(modifiedProducts)
}

let cart=[
    {name:"pen",price:20,qty:3},
    {name:"HeadPhone",price:800,qty:1},
    {name:"Notebook",price:50,qty:2},
    {name:"Watch",price:1500,qty:1}
]
console.log(getExpensiveItemTotal(cart,500));