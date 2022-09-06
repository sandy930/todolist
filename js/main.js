var password=document.getElementById("password")
var email=document.getElementById("email")
var username=document.getElementById("username")
var rePassword=document.getElementById("rePassword")
// warning field
var warning=document.getElementsByClassName('warn')
// btn
const signUpBtn=document.getElementById("signUp").addEventListener("click",signUp)

var flag=true
function validateInput(){

    for(var i=0 ; i<warning.length; i++){
            // check blank input
            const warningField=(warning[i].className.split(' ')[0].charAt(0).toUpperCase() + warning[i].className.split(' ')[0].slice(1))
            if(warning[i].previousElementSibling.value==''){
                warning[i].textContent=`${warningField} cannot be blank`
                warning[i].classList.add("warnStyle")
                flag=false
            }else{
                // check email validation
                const mailFormat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
                if(!mailFormat.test(email.value)){
                    flag=false
                    warning[i].classList.contains('email') && (warning[i].textContent=`${warningField} is not valid`)
                }else{
                    warning[i].classList.contains('email') && (warning[i].textContent='')
                    warning[i].classList.contains('email') && (warning[i].classList.remove("warnStyle"))

                }
                // check username validation
                if(username.value.split(' ').length<2){
                    flag=false
                    warning[i].classList.contains('username') && ( warning[i].textContent=`${warningField} must have more than 1 word`)
                }else{
                    warning[i].classList.contains('username') && (warning[i].textContent='')
                    warning[i].classList.contains('username') && (warning[i].classList.remove("warnStyle"))

                }
                // check password digit
                if(password.value.length<8){
                    flag=false
                    warning[i].classList.contains('password') && (warning[i].textContent=`${warningField} must have more than 7 digits`)
                }else{
                    warning[i].classList.contains('password') && (warning[i].textContent='')
                    warning[i].classList.contains('password') && (warning[i].classList.remove("warnStyle"))

                }
                if(rePassword.value!==password.value){
                    flag=false
                    warning[i].classList.contains('rePassword') && (warning[i].textContent=`${warningField} is not matched with password`)
                }else{
                    warning[i].classList.contains('rePassword') && (warning[i].textContent='')
                    warning[i].classList.contains('rePassword') && (warning[i].classList.remove("warnStyle"))

                }

                flag=true
            }

    }

}
// sign-up
function signUp(e){
   e.preventDefault()
   validateInput()
   const user={
       "username":username.value,
       "email":email.value,
       "password":password.value
   }

   if(flag){
       localStorage.setItem('user',JSON.stringify(user))
       location.replace("http://127.0.0.1:5500/login.html")
   }
}

