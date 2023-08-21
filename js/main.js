let usernameheading = document.getElementById("username")

usernameheading.innerHTML = `Welcome ${JSON.parse(localStorage.getItem("userName"))}`

function logout(){
    localStorage.removeItem("userName")
    window.location.href = "index.html"
}