var ul=document.getElementById("ul")
var inputText=document.getElementById("todo");
var listGetFromServer=[]
// btn
const addItem=document.getElementById("addItem").addEventListener("click",addTodoItem)
const delItem=document.getElementsByClassName('btn_item')

window.addEventListener("DOMContentLoaded",showListItem)
function showListItem(){
    JSON.parse(localStorage.getItem("ul")) &&  (listGetFromServer=[...(JSON.parse(localStorage.getItem("ul")))]) ;
    ul.innerHTML=''
    listGetFromServer.map(item=> {
        var li=document.createElement('li');
        var p=document.createElement('p');
        p.textContent=item
        var btn=document.createElement("button");
        btn.textContent="X"
        btn.classList.add("btn_item")
        btn.addEventListener("click",deleteItem)
        li.appendChild(p);
        li.appendChild(btn)
        ul.appendChild(li)
    })
}
function addTodoItem(){
    var inputField=inputText.value
    listGetFromServer.push(inputField)
    localStorage.setItem("ul",JSON.stringify(listGetFromServer))
    showListItem()
    inputText.value=''
}

function deleteItem(e){
    const targetValue=(e.target.previousElementSibling.textContent)
    var newList=listGetFromServer.filter(item=>item!==targetValue)
    localStorage.setItem("ul",JSON.stringify(newList))
    showListItem()
}