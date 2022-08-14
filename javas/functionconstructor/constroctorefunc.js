function getpersonfulname(fname,lname,city){    // its creat a new object instans .we can creat new keys inside 
                                               //our objct "this" syntax  is must and we ca not use colens but we can use assignment
                                                  //and if we appear your result then "new" key word is must .
    this.firstname=fname;                        //if we are not pass argument then them exist a emty object.
    this.lastname=lname;
    this.city=city;
    this.getpersoninfo = function (){
        return  `First name ${this.firstname} last name ${this.lastname} city ${this.city}`
    }

    
}
// console.log(new getpersonfulname("jhon","wick","nanded"))
// const newob=( new getpersonfulname("jhon","wick","nande"))
// console.log(newo/b)