function check(id){
    var thePassword = document.getElementById("thePassword");
    var createPassword = document.getElementById("createBtn");
    const selectOne = document.getElementsByName("characters");
        for(let i=0; i<selectOne.length; i++){
        selectOne[i].checked = false;
    }
    var finalLength = document.getElementById(id);
    finalLength.checked = true;

    createPassword.addEventListener("click", generate);
    function generate() {
    let strings = "qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890!@#$%^&*()-=+[]{}\||:';<>,.?/~";

    var password = "";

    for(let i = 0; i < strings.length; i++){
        let randomNum = (Math.random() * strings.length);
        password += strings.substr(randomNum, randomNum + 1);  
    }
    let finalPassword = password.substr(0, finalLength.value);
    thePassword.value = finalPassword;
    
}};







