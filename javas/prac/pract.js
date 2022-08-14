// ===============================function method==============================================
const person={
    firstname:"jhon",
    grtfulname(lastname){
        return this.firstname +" "+ lastname
    }
} 
// console.log(person)
const person2={
    firstname:"johi",
}
// console.log(person.grtfulname.call(person2,"smith"))
// console.log(person.grtfulname.apply(person2,[ "shaikh"]))
// console.log(person.grtfulname.bind(person2,"shaikh")())
  
// =================================================practice factory method=====================
function maneger(lname){
    return{
        firstname:"jhon",
        lastname:lname,
        getfulname(){
            `first name:${this.firstname} last name:${this.lastname}`
        }
    }
}
// console.log(maneger("smith"))
// const peo =maneger("patel")
// console.log(peo)
// console.log(peo.getfulname())
//    =========================================constructorfunction=======================

function people (lname){
    this.firstname ="jhon";
    this.lastname =lname;
    this.getfulname=function(){
     `first name: ${this.firstname} last name:${this.lastname}`
    }

}  
// console.log( new people("wick"))
// 
// ======================================try catch=============================================
//array
try{
    const fruite=["apple","banana","gava","mango"]
    if(!Array.isArray)  throw new Error("its not a valid array")

}
catch(e){
// console.log("its not avlid arrray")
}

//object   ====================================================================================

try{ 
    const obj={name:"smith",age:23, city:"nanded"}
   if(!Number.isInteger(obj)) throw new Error()
}
catch(e){
  console.log("not anumber")
}