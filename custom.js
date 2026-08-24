// let sortDescending=(nums)=>{
// // console.log(nums);
// const nums2=[...nums]
// const sortNums=nums.sort((a,b)=>{
//     return b-a;
// });
// // console.log(sortNums)
// return sortNums;
// }

// const numbers=[1,10,2,25,3];

// console.log(sortDescending(numbers))

const previewDiscount=(cart)=>{
    return cart.map((item)=>{
    item.price=item.price-item.price*0.1;
    return item;
    })
}

let cart=[
    {name:"Pen",price:100},
    {name:"Bag",price:500}
];
console.log(previewDiscount(cart))