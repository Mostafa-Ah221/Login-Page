var btnLogin = document.getElementById("login");
var signUp = document.getElementById("signUp");
var inpEmail = document.getElementById("signinEmail");
var inpPassword = document.getElementById("signinPassword");
var secInputs = document.querySelector(".sec-inputs");
var incorrectElemen = document.getElementById("incorrect");

var temp;

function validateEmail(email) {
    // 
    var emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    return emailPattern.test(email);
}

btnLogin.onclick = function() {
    if (btnLogin.innerHTML === "Login") {
        if (inpEmail.value === "" || inpPassword.value === "") {
            incorrectElemen.innerHTML = "All or one of inputs is required";
            incorrectElemen.style.color = "red";
            inpEmail.style.border = "1px solid red";
            inpPassword.style.border = "1px solid red";
        } else if (!validateEmail(inpEmail.value)) {
            incorrectElemen.innerHTML = "Invalid email format!";
            incorrectElemen.style.color = "red";
            inpEmail.style.border = "1px solid red";
        } else {
            
            var storedUsers = JSON.parse(localStorage.getItem('users')) || [];

           
            var user = storedUsers.find(function(user) {
                return user.email === inpEmail.value;
            });

            if (user) {
                if (user.password === inpPassword.value) {
                    incorrectElemen.innerHTML = "Login successful!";
                    incorrectElemen.style.color = "green";
                    inpEmail.style.border = "1px solid green";
                    inpPassword.style.border = "1px solid green";
                    
                    
                    localStorage.setItem('userData', JSON.stringify(user));

                    window.location.href = "welcomepage.html"; 
                } else {
                    incorrectElemen.innerHTML = "Incorrect password!";
                    incorrectElemen.style.color = "red";
                    inpEmail.style.border = "1px solid red";
                    inpPassword.style.border = "1px solid red";
                }
            } else {
                incorrectElemen.innerHTML = "Email not registered!";
                incorrectElemen.style.color = "red";
                inpEmail.style.border = "1px solid red";
                inpPassword.style.border = "1px solid red";
            }
        }
    } else if (btnLogin.innerHTML === "Sign Up") {
        var inpName = document.getElementById(temp);
        if (inpName.value === "" || inpEmail.value === "" || inpPassword.value === "") {
            inpName.style.border = "1px solid red";
            incorrectElemen.innerHTML = "All or one of inputs is required";
            incorrectElemen.style.color = "red";
            inpEmail.style.border = "1px solid red";
            inpPassword.style.border = "1px solid red";
        } else if (!validateEmail(inpEmail.value)) {
            incorrectElemen.innerHTML = "Invalid email format!";
            incorrectElemen.style.color = "red";
            inpEmail.style.border = "1px solid red";
        } else {
            //
            var storedUsers = JSON.parse(localStorage.getItem('users')) || [];

            // 
            var userData = {
                name: inpName.value,
                email: inpEmail.value,
                password: inpPassword.value
            };
            storedUsers.push(userData);

            //
            localStorage.setItem('users', JSON.stringify(storedUsers));

            incorrectElemen.innerHTML = "Data stored successfully!";
            incorrectElemen.style.color = "green";
            inpEmail.style.border = "1px solid green";
            inpPassword.style.border = "1px solid green";
            inpName.style.border = "1px solid green";
        }
    }
}

signUp.addEventListener("click", function() {
    if (signUp.textContent === "Signin") {
        var inpName = document.getElementById(temp);
        if (inpName) {
            inpName.remove(); 
        }
        inpPassword.placeholder = "Enter Password";
        incorrectElemen.innerHTML = "";
        inpEmail.style.borderColor = "#fff";
        inpPassword.style.borderColor = "#fff";
        inpEmail.value = "";
        inpPassword.value = "";
        btnLogin.textContent = "Login";
        signUp.textContent = "Sign Up";
    } else {
        var inpName = document.createElement("input");
        inpName.placeholder = "Enter your name";
        inpName.id = "yourName";
        inpName.className = "form-control my-3 text-light Normal weight text";
        secInputs.insertAdjacentElement("afterbegin", inpName);
        inpPassword.placeholder = "Enter Password";
        incorrectElemen.innerHTML = "";
        inpEmail.style.borderColor = "#fff";
        inpPassword.style.borderColor = "#fff";
        inpName.style.color = "#fff";
        inpEmail.value = "";
        inpPassword.value = "";
        btnLogin.textContent = "Sign Up";
        signUp.textContent = "Signin";
        temp = inpName.id; 
    }
});