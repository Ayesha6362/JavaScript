function intrest3(principle,rate=15,year=8){
return  ((principle*rate) /100 *year)
}
console.log(intrest3(1000,10))  //rate 10 lega 15 nhi ye uski default value h


function intrest3(principle,rate=15,year){//agar hum year nhi likhe to result (Nan) means not a number  aye ga
    return ((principle*rate) /100 *year)
    }
    console.log(intrest3(1000,10)) 

    function intrest3(principle,rate=15,year){  //is kase me undefinde aayea ga mgr error nhi aye ga
        rate=rate||15;
        year=year||5;
        return ((principle*rate) /100 *year)
        }
        console.log(intrest3(1000,10)) 