function submit() {
    var username = document.getElementById("user").value
    var email  = document.getElementById("email").value
    var password = document.getElementById("password").value
    var confirm = document.getElementById("confirm").value

    checkusername(username)
    checkmail(email)
    checkpassword(password)
    correctnessofpassword(password,confirm)
}
const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
function checkmail(email){
    if (regex.test(email)){
        s = document.getElementById("email").classList.value
        if(s.includes("error")){
            document.getElementById("email").classList.replace("error","success")
        }
        else{
            document.getElementById("email").classList.add("success")
        }
        document.getElementById("email error").innerText = ""
    }
    else{
        s = document.getElementById("email").classList.value
        if(s.includes("success")){
            document.getElementById("email").classList.replace("success","error")
        }
        else{
            document.getElementById("email").classList.add("error")
        }
        document.getElementById("email error").innerText = "Enter valid mail address"
    }
}
function checkusername(username){
    if(username.length >7){
        s = document.getElementById("user").classList.value
        if(s.includes("error")){
            document.getElementById("user").classList.replace("error","success")
        }
        else{
            document.getElementById("user").classList.add("success")
        }
        document.getElementById("username error").innerText = ""
    }
    else{
        s = document.getElementById("user").classList.value
        if(s.includes("success")){
            document.getElementById("user").classList.replace("success","error")
        }
        else{
            document.getElementById("user").classList.add("error")
        }
        document.getElementById("username error").innerText = "Username must be 8 digit long"
    }
}
function checkpassword(password){
    if(password.length > 4){
        s = document.getElementById("password").classList.value
        if(s.includes("error")){
            document.getElementById("password").classList.replace("error","success")
        }
        else{
            document.getElementById("password").classList.add("success")
        }
        document.getElementById("password error").innerText = ""
    }
    else{
        s = document.getElementById("password").classList.value
        if(s.includes("success")){
            document.getElementById("password").classList.replace("success","error")
        }
        else{
            document.getElementById("password").classList.add("error")
        }
        document.getElementById("password error").innerText = "Password must be 5 digit long"
    }
}
function correctnessofpassword(password,confirm){
    if(password.length<5){
        console.log(55555)
        s = document.getElementById("confirm").classList.value
        if(s.includes("success")){
            document.getElementById("confirm").classList.replace("success","error")
        }
        else{
            document.getElementById("confirm").classList.add("error")
        }
        document.getElementById("confirm error").innerText = "Enter your password correct "
    }
    else if(password===confirm){
        s = document.getElementById("confirm").classList.value
        if(s.includes("error")){
            document.getElementById("confirm").classList.replace("error","success")
        }
        else{
            document.getElementById("confirm").classList.add("success")
        }
        document.getElementById("confirm error").innerText = ""
    }
    else{
        s = document.getElementById("confirm").classList.value
        if(s.includes("success")){
            document.getElementById("confirm").classList.replace("success","error")
        }
        else{
            document.getElementById("confirm").classList.add("error")
        }
        document.getElementById("confirm error").innerText = "Password does not match"
    }
}