let pwBtn, emBtn, pwFld, emFld, pwRes, emRes;

pwBtn = document.getElementById("password-button")
emBtn = document.getElementById("email-button")

pwFld = document.getElementById("password-field")
emFld = document.getElementById("email-field")

pwRes = document.getElementById("password-result")
emRes = document.getElementById("email-result")

pwBtn.addEventListener("click", () => {
    let pw = pwFld.value;
    let mess;
    pwRes.style.display = 'inline'
    if (pw.length === 0){
        mess = "Campo vuoto"
        pwRes.textContent = mess;
        return;
    }
    if (pw.length < 6) {
        mess = "Password con meno di 6 caratteri"
        pwRes.textContent = mess
        return
    }
    if (pw.match('^(?=.*\\d)(?=.*[A-Z])(?=.*[!@#$%^&*()-_+=]).*$')) {
        mess = "Password corretta"
        pwRes.textContent = mess
    } else {
        mess = "Password deve contenere almeno un numero, un carattere speciale e una lettera maiuscola"
        pwRes.textContent = mess
    }
})