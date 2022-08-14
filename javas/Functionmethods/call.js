const person={
    firtsname:"jhon",
    getfullname:function(lastname,city){
        return this.firtsname +" "+ lastname  +" "+ city

    }

}
const person2={
    firtsname:"wike"

}
// console.log(person.getfullname.call(person2,"smith" ,"nanded"))
// console.log(person.getfullname.apply(person2 , ["smith","nanded"]))
// console.log(person.getfullname.bind(person2,"smith","nanded")())