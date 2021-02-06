function get_profile(){
    j = localStorage.getItem("User_name");
    j1 = localStorage.getItem("Type");
    document.getElementById("Name").innerHTML = "User Name - " + j;
    document.getElementById("Type").innerHTML = "Type - " + j1;
}
function save(){
    window.location="index3.html"
}
function logout(){
    localStorage.removeItem("User_name");
    localStorage.removeItem("Type");
    localStorage.removeItem("Saved-name");
    localStorage.removeItem("Saved-type");
    window.location="index.html";
}