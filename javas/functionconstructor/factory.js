function person(lastname){       //factroy function its always retune a object .its creat a new object.
    return{                       //we can writte more methodes.
    firstName:"jhon",
     lastname:lastname,
    
     getfullname(){
        return  `First name: ${this.firstname} last name: ${this.lastname}`
    
     
   

   }

}}
// console.log(person("wick"))    /// ye object ka dosre object me data lere
const jhon=person("shaikh")
// console.log(jhon)                its not give a new object.
console.log(jhon.getfullname())
   