// For loope
const nums =[1,2,3,4,5,6,7,8,9,10];
for( let i=0; i<nums.length; i++){
    console.log(nums[i] *15);
}

const revers =[1,2,3,4,5,6,7,8,9,10];
 let myarry=[];
for( let i=nums.length-1; i>=0; i--){
    console.log(nums[i] *15);
    // myarry.push(nums[i] *15);
}
// console.log(myarry)

// ==============================================================================================
// while loope
// baher variable declar krte.
// let newNum=1;
// while(newNum<10){
//     console.log(newNum +"x 9 =" + newNum * 9);
//     newNum++;
// }
// do while
// do{
// console.log(newNum +"x 9 =" + newNum * 9);
//     newNum++;
// } while(newNum < 0);
// ===========================================================================================
// for in   (object ke liye "key")
const person ={ Firstname:"Afroz", lastname:"khan",City:"Nanded"};
for(let kuchbhi in person){
    console.log(kuchbhi +"--"+person[kuchbhi]);

}
// ==========================================================================================
// for of  (arry ke liye )
const letter=["A","B","C","D","E","F"];
for (let somthing of letter ){
    console.log(somthing +" i dont know");

}
// =============================================================================================

console.log(Math.round(20.4));
console.log(Math.floor(20.4));
console.log(Math.ceil(20.4));
console.log(Math.max(20.4));
console.log(Math.min(20.4));
console.log(Math.sqrt(20.4));
console.log(Math.power(20.4));