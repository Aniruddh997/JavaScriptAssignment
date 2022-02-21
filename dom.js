
document.getElementById("localStorageDemo").onsubmit = function() {myFunction(event)};

function myFunction(){
    event.preventDefault();
    
    let username = document.getElementById("username");
    let password = document.getElementById("password");
    //console.log(username);
    localStorage.setItem(username,password);
}