// constroctore method
const rating={
   title:["Irom man","captanamerica","Hulk","thor"],
    tag:"A+",
    rating(){                                          //object ke method me raha to wo object o refre kre ga.
                                                            //  object me metod or method me nested function tab window ko refer  kre ga .
  this.title.forEach(function(item){
   return  `${item}  ${this.tag}`                            //humus ko bin () kr sakte.ya errow function le to this nhi lage ga . or second argument bhi pass kr sakte .f
        }.bind(this))                                       //regular function window ko refer kre ga .                  
    }
}
console.log(rating.rating())
    // ===========================================================================
///aisa bhi likhsakte errow function se
const rating2={
    title:["Irom man","captanamerica","Hulk","thor"],
    tag:"A+",
    rating(){                                          //object ke method me raha to wo object o refre kre ga.
                                                            //  object me metod or method me nested function tab window ko refer  kre ga .
  this.title.forEach((item)=>{
   return  `${item}  ${this.tag}`                            //humus ko bin () kr sakte.ya errow function le to this nhi lage ga .
        })                                       //regular function window ko refer kre ga .                  
    }
}
console.log(rating2.rating())
//==============================================================================================

// regular function
function getdata(){                                // this refr a wiondow .we can change globale refrence then we use.call()
return console.log(this)
}

