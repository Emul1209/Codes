let username;
let password;
document.getElementById("inLog").onclick = function(){
    username = document.getElementById("usr").value;
    password = document.getElementById("pw").value;
    console.log(password)
    document.getElementById("greetings").textContent = 
    `Hello, ${username}!`;
    document.getElementById("usr").value = ""
}
