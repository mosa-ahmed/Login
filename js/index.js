let labelUserName = document.getElementById("label-user")
let userName = document.getElementById("userName")
let email = document.getElementById("email")
let password = document.getElementById("password")
let loginBtn = document.getElementById("login-btn")
let heading = document.getElementById("heading")
let success = document.getElementById("succ")
let signupBtn = document.getElementById("sign-up")

let mode = "Login"
let users

loginBtn.innerHTML = mode
heading.innerHTML = mode
signupBtn.innerHTML = "Sign Up"

users = localStorage.getItem("users") ? JSON.parse(localStorage.getItem("users")) : []

signupBtn.addEventListener("click", function(){
    if(signupBtn.innerHTML === "Sign Up"){
        heading.innerHTML = "Sign Up"
        labelUserName.classList.remove("d-none")
        userName.classList.remove("d-none")
        loginBtn.innerHTML = "Sign Up"
        signupBtn.innerHTML = "Login"
    }else{
        heading.innerHTML = "Login"
        labelUserName.classList.add("d-none")
        userName.classList.add("d-none")
        loginBtn.innerHTML = "Login"
        signupBtn.innerHTML = "Sign Up"
    }
    
})

loginBtn.addEventListener("click", function(){
    if (loginBtn.innerHTML === "Sign Up"){
        if (validateUserName() && validateEmail() && validatePassword()){
            if (checkEmailExists()){
                showAlert("Email Exists!")
                return false
            }
            let user = {
            name: userName.value,
            email: email.value,
            password: password.value
        }
        users.push(user)
        setToLocalStorage()
        clearInputs()
    }else{
        showAlert("Invalid Inputs!")

    }
    }else if(loginBtn.innerHTML === "Login"){
        if (validateEmail() && validatePassword()){
            if(checkEmailAndPassword()){
                window.location.href = "home.html"
                clearInputs()
            }else{
                showAlert("Incorrect Email or Password")
            }
        }
    }
})

function checkEmailAndPassword(){
    for (var i = 0; i < users.length; i++)
    {
        console.log(i)
        if (users[i].email == email.value && users[i].password == password.value){
            console.log(users[i].email, users[i].password)
            localStorage.setItem("userName",JSON.stringify(users[i].name))
            return true
        }
    }
}

function setToLocalStorage(){
    localStorage.setItem("users", JSON.stringify(users))
}

function clearInputs(){
    userName.value = ""
    email.value = ""
    password.value = ""
}

function showAlert(text){
    success.innerHTML = text
    success.classList.replace("opacity-0","opacity-100")
    setTimeout(() => {
        success.classList.replace("opacity-100","opacity-0")
    }, 3000);
}

function checkEmailExists(){
    for(var i=0; i<users.length; i++){
        if(users[i].email == email.value){
            return true
        }
    }
}

function validateUserName(){
    var regex = /^[a-zA-Z0-9]{3,10}$/;
    if (regex.test(userName.value)){

        return true;
    }else{

        return false;
    }
}

function validateEmail(){
    var regex = /^[a-zA-Z0-9@.]{3,10}$/;
    if (regex.test(email.value)){

        return true;
    }else{

        return false;
    }
}

function validatePassword(){
    var regex = /^[a-zA-Z0-9]{3,10}$/;
    if (regex.test(password.value)){

        return true;
    }else{

        return false;
    }
}