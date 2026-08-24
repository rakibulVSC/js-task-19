// let findUserById=(users,id)=>{
//     let expectedUser=users.find(user=>{
//         // console.log(user)
//         return user.id === id;
//     })
//     if(expectedUser){
//         return expectedUser}

//    else{
//     return "user not found"
//    }

// };
// let users=[
//     {id:1, name:"Rafi"},
//     {id:2, name:"Karim"},
//     {id:3, name:"Manik"}
// ]
// console.log(findUserById(users,3));





let getCardTotal=(cart)=>{


    let total=card.reduce((accumalator,elem)=>{
    console.log(accumalator,elem);
    return accumalator+(elem.price*elem.qty);
    },0);
    return total;
}

let card=[
    {name:"Pen", price:20, qty:3},
    {name:"NoteBook",price:50,qty:2}
]
console.log(getCardTotal(card));