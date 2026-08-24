const createLifeCounter=()=>{
    let lives=3;
    return ()=>{
        

        
        if(lives>=0){
            lives-- ;
        }
        return lives;
    }
}
const rahimLifeUpdate=createLifeCounter();
const karimLifeUpdate=createLifeCounter();
console.log(rahimLifeUpdate());
console.log(rahimLifeUpdate())
console.log(karimLifeUpdate())