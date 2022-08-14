                                                      
const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "i",
  ];
  const nums = [2, 4, 6, 8, 10, 12, 14, 16, 18, 200, 20];
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
  // console.log(letters.includes("a"))  //true false
//callaback wale ko  aisa likhte or wo out put deta .true false nhi deta..

  // console.log(letters.find((item,index)=>{ //lakr deta
    // if(item==="a"){
        // console.log(item,index)
    // }
  // }))


  // console.log(nums.some((item)=> item < 200));  //koi bhi raha to dinga. agr ek bhi  false raha to false dega
  // console.log(nums.every((item)=> item > 0));  //jitne bhi dinga . koi ek bhi ture aya to true dega 

  //findindex   //pahla index dega  baqi ka nhi ek index check krta
  // console.log(nums.findIndex((elem) => elem === 2));
  // console.log(nums.indexOf(200)); //index number dega nhi h to -1 dega 
  // console.log(nums.join(" "));


// console.log(add.Concat(nums,letters))

let add=[1,2,3,4,5,]
let add2=["fhgkghg","dhbdj"]
let add3=["apple",23,'fxvkx']
let result=add.concat(add2,add3)
// console.log(result);

const arr=[2,3,[3,5,],[455]]
// console.log(arr.flat(Infinity));
// console.log(arr.flat(2));
// console.log(nums.toString());
// console.log(nums.fill(0,2,5))
// console.log(nums.fill(0))
// console.log(nums.splice(0,2,"a"))
// const fil=nums.filter((item)=>item<4)
// console.log(fil);


// const maped=nums.map((item)=>item +2)

// console.log(maped);
// console.log(nums.reverse());

