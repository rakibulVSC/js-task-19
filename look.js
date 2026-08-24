let findUserById=(users,id)=>{
    let expectedUser=users.find(user=>{
        // console.log(user)
        return user.id === id;
    })
    if(expectedUser){
        return expectedUser}

   else{
    return "user not found"
   }

};
let users=[
    {id:1, name:"Rafi"},
    {id:2, name:"Karim"},
    {id:3, name:"Manik"}
]
console.log(findUserById(users,3))