const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const captcha = document.getElementById("captcha");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
});

captcha.addEventListener(input, () => {
    const img = document.querySelector("img");
    const text = e.target.value;
    const blurValue = 20 - text.length;
    img.style.filter = `blur(${blurValue}px)`;
    if (blurValue <= 0) {
        setSucess(captcha);
    } else {
        setError(captcha, "Text is not long enough");
    }
});

function checkInputs() {
    console.log("Working");
    // get the users value
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const password2Val = password2.value.trim();
    const captchaVal = captcha.value.trim();

    if (usernameVal === "") {
        setError(username, "Username can not be empty");
    } else if (usernameVal.length < 5) {
        setError(username, "The minimum username length is 5");
    } else {
        setSucess(username);
    }
if (emailVal === "") {
    setError(email, "email can not be empty");
} else if (emailVal.includes("@")) {
    setError(email, "email not vaild");
} else {
    setSucess(email);
}
if (passwordVal === "") {
    setError(password, "password can not empty");
} else if (passwordVal.length < 5){
    setError(password, "The minimum password length is 5");
} else {
    setSucess(password);
}
if (password2Val === "") {
    setError(password2, "password2 can not be empty");
} else if (passwordVal !== password2Val) {
    setError(password2, "Password does not match");
} else {
    setSucess(password2);
}


if (captchaVal === "") {
    setError(captcha, "Authentication Needed");
} else {
    setSucess(captcha);
}
}


function setError(input, msg) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    // formControl.classList.add('error)
    small.innerText = msg;
}

function setSucess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}