// function declaration
// can  use firstFunction before initioalis
firstFunction();
function firstFunction(){
    console.log("this is my first function ")
}
// ====================================================================================================
// function expression
// can not use myFunction before initioalis
// function pahle call nhi krsakte
const myFunction=function
(){
    console.log("i am functio expression")
}
myFunction();
// ==================================================================================================
// anonymose (self call) function
// Arry.map( function(){});
// Arry.map(()=>{})
// ================================================================================================

// Arrow function
const kuchbhi=()=>{
    console.log("this is my arrow functio")
}
kuchbhi();

const add=(sum1,sum2)=>{
    console.log(sum1+sum2)
}
add(2,4);
const multt=(value1,value2)=>{
    console.log(value1*value2)
}
multt(2,4);
const sub=(value1,value2)=>{
console.log(value1-value2)
}
sub(6,2);

// =================================================================================
// Rest parameter or Rest oprator

// rest parameter allows a function to eccept indefinite argument as an arry.
const  excaltechs=(value1,value2,...rest)=>{

console.log( rest)
let a= rest[1]
let b= rest[2]
let c= a+b
console.log(c)

}
excaltechs(20,30,40,50,60)
// ==================================================================================================
   const TemplateLittrel=(name,adress)=>{
      console.log(name,adress)
    //   do type h lin me likhne ke
      console.log(name+" "+"webdevloper"+" "+"courses"+" "+"in"+ " "+adress);
      console.log(`${name} webdevloper courses in ${adress}` )
   }
   TemplateLittrel("Excaltechs","naded")

//    ==================================================================================================
const TemplateLittral=(name)=>{
    console.log(name)
    console.log(name+" "+"webdevloper"+" "+"courses"+" "+"in"+ " "+"nanded");
    console.log(`${name} webdevloper courses in nanded` )
 }
 TemplateLittral( prompt("Dont sleep"))
//  ====================================================================================================