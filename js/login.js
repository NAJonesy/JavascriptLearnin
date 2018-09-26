var username;
var password;

function login(){
    this.username = document.getElementById('username').value;
    this.password = document.getElementById('password').value;

    document.getElementById('output').innerText = this.username + "text" + this.password;
}