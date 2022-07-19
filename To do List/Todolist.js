let addtodo= document.getElementById("add");
let delttodo= document.getElementById("delt");
let todolist= document.getElementById("list");
let inpttodo= document.getElementById("inputfiled");

 addtodo.addEventListener("click",function(){
    var paragraph= document.createElement("p");
    paragraph.classList.add("para");
    todolist.appendChild(paragraph);
    paragraph.innerHTML=inputfiled.value;
    inputfiled.value="";

    paragraph.addEventListener("click",function(){
    paragraph.style.textDecoration="line-through"

    })
    delttodo.addEventListener("click",function(){
        todolist.removeChild(paragraph)
    
        })
        paragraph.addEventListener("dblclick",function(){
            todolist.removeChild(paragraph)
        
            })
        



 })