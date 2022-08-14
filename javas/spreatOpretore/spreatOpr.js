//spreat opretor use array or object;
//Array
const arrone=[1,2,3];    ///data nikal sakte dal sakte arry me
console.log(arrone)
const arrtwo=[3,2,1];
console.log(arrtwo)
const newarr=[...arrone,...arrtwo];  
// console.log(newarr);


const fruites=["apple","orang","banana"];
const  number=[1,2,3,4,5,];
const newarry=[...fruites,...number];
// console.log(newarry);

//object

const objone ={name:"jhon",age:25}
const objtwo ={contact:94217571}
const objthree={...arrone,...arrtwo};
// const objthree ={name:"amer",age:35}
// const objthree={...objone,city:"naded"}   //it in not   a reasssign it is a modifie oyur data.
// const objthree={...objone,age:26}
console.log(objthree);

// ==========================examle of spreat opretor============================================


const products = [
    {
      category: "shoes",
      size: 7,
      color: "Black",
      brand: "Adidas",
      id: 1,
      price: 2000,
    },
    {
      category: "shoes",
      size: 8,
      color: "white",
      brand: "Puma",
      id: 2,
      price: 4000,
    },
    {
      category: "shoes",
      size: 9,
      color: "Yellow",
      brand: "puma",
      id: 3,
      price: 3000,
    },
    {
      category: "shoes",
      size: 8,
      color: "red",
      brand: "Nike",
      id: 4,
      price: 4000,
    },
    {
      category: "flipper",
      size: 9,
      color: "Green",
      brand: "adidas",
      id: 5,
      price: 6000,
    },
    {
      category: "shoes",
      size: 7,
      color: "Orange",
      brand: "nike",
      id: 6,
      price: 7000,
    },
  ];

const mapped= products.map((item)=>{
    if(item <= 4000 )  
    return {...item,delevry:3};
  else {
       return {...item,delevry:5}}
  })
  console.log(mapped);
  
       const mapped2= products.map((item)=>{
   if(item .brand ="puma" )  
    return {...item,discount:"20%"};
    
    else{
        return{...item, descount:"0%"}};
})
console.log(mapped2);
