class person {
    constructor (fname,lname){
    this.firstname=fname;
    this.lastname=lname;
    }
    getpersonname(){
        const deatails= `first name :${this.firstname} last name:${this.lastname}`
        return deatails;
    }
} 
console.log( new person("jhon","wick"));

class person2 extends person{
    constructor( newfname,newlname,email,contact)
    {
        super(newfname,newlname);
         person("thor","asgard")
        this.Email= email;
        this.Contact= contact; 
    } 
    
    getfuladress(){
        const contacts=` email:${this.Email} contact:${this.Contact}`;
        return contacts;
    }
}
const personcontsctdetails= new person2("thor","asgard","fffroc@gmail.com",9421757143)
  console.log (  contacts.getpersonname());