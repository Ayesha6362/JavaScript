console.log(adre)
const age=24; //won't be hoisted- throws refrence.

let adress="nanded";  //won't be hoisted- throws refrence.

var name="jhon"; //will be hoisted but return undifined as only the declaration is hoisted

var getname =function(){ "jhon"}   // won't be hoisted -throes undefined error if you access only the variable.

const getadress=()=>{"nanded"}

function getcontact (){ 8087560784; } //





//Hoisting is default bihavior of a javascript browser move the all declaration variables and declaration function top of the Scope.