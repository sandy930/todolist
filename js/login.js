var passwordEnter=document.getElementById("password")
var emailEnter=document.getElementById("email")
const logInBtn=document.getElementById("logIn").addEventListener("click",logIn)

var flag=true
// sign-in
function logIn(e){
    e.preventDefault()
    console.log("cb")
    let user=localStorage.getItem("user")
    const {email,password}=JSON.parse(user)
    if(emailEnter.value!==email){
        flag=false
        alert('Cannot find email address')
    }
    if(passwordEnter.value!==password){
        flag=false
        alert('Account is not exist')
    }

    flag && location.replace("http://127.0.0.1:5500/todolist.html")

 }