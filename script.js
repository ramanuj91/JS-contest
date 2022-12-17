let emailInput = document.getElementById('email1');
let passwordInput = document.getElementById('pwd');
let button = document.getElementById('btn');
let messageDiv = document.getElementById('message')

emailInput.addEventListener('change', validation)
passwordInput.addEventListener('change', validation)

let messagemailDiv = document.getElementById('messagemail');
let messagepasswordDiv = document.getElementById('messagepassword');

emailInput.onchange = validation();
passwordInput.onchange = validation();

function confirmfunction(){
    if(confirm("Confirm submission?")){
        alert("successful signup!")
    }
    else{
        emailInput.value="";
        passwordInput.value="";
        messageDiv.innerText="";
    }
}

function validation(){
    let email = emailInput.value;
    let password = passwordInput.value;

    if(email.length > 3 && email.includes('@') && email.includes('.')){
        if(password.length > 8){
            console.log("All good to go")
            messageDiv.innerText = "All good to go";
            messageDiv.style.color = "green";
        }
    }
    else{
        messageDiv.innerText = "Email or password is invalid";
        messageDiv.style.color = "red";
        console.log("Emai or password are incorrect")
    }
}

