// let applyDiscout=(prices,discountRate=0)=>{
//     let pricesAfterDiscount=prices.map((elem,ind,arr)=>{
// //    console.log(ind,elem);
// const discoutedPrice=elem-(elem*discountRate/100);
//    return discoutedPrice;
//     })
//     // console.log(pricesAfterDiscount);
//     return pricesAfterDiscount;
// }
// let productPrices=[500,1000,250,400,700];
// console.log(applyDiscout(productPrices,10))


let applyDiscountAmount=(pricas,discountable=0)=>{
    let discountAmount=pricas.map((elem,ind,arr)=>{
        // console.log(elem,ind)
        const discountabl=elem-(elem*5/100);
        return discountabl;
    })
    return discountAmount;
}
let pricesProduct=[100,200,300,400,500];
console.log(applyDiscountAmount(pricesProduct,5))