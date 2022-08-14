try{
    const number=5;
    if (!Number.isInteger(number)) throw new Error("Not a valid Number");
    console.log("valid Number Provided")

}catch(e){
  console.log(e.massege);
}
