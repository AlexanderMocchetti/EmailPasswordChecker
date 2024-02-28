let pwBtn, emBtn, pwFld, emFld, pwRes, emRes;

pwBtn = document.getElementById("password-button")
emBtn = document.getElementById("email-button")

pwFld = document.getElementById("password-field")
emFld = document.getElementById("email-field")

pwRes = document.getElementById("password-result")
emRes = document.getElementById("email-result")

pwBtn.addEventListener("click", () => {
    let pw = pwFld.value;
    pwRes.style.display = 'inline'
    if (pw.length === 0) {
        pwRes.textContent = "Campo vuoto"
        return;
    }
    if (pw.length < 6) {
        pwRes.textContent = "Password deve contenere almeno 6 caratteri"
        return;
    }
    if (pw.search(/[^A-Z]*/) !== -1) {
        pwRes.textContent = "Password deve contenere almeno una lettera maiuscola"
        return;
    }
    if (pw.search(/[^a-z]*/) !== -1) {
        pwRes.textContent = "Password deve contenere almeno una lettera minuscola"
        return;
    }
    if (pw.search(/[^0-9]*/) !== -1) {
        pwRes.textContent = "Password deve contenere almeno un numero"
        return;
    }
    if (pw.search(/^[a-zA-Z0-9]*$/) !== -1) {
        pwRes.textContent = "Password deve contenere almeno un carattere speciale"
        return;
    }
    pwRes.textContent = "Password è corretta"
})

emBtn.addEventListener("click", () => {
    let em = emFld.value;
    emRes.style.display = "inline"
    if (em.length === 0) {
        pwRes.textContent = "Campo vuoto"
        return;
    }
    if (em.search(/^[^@]+@[^.@]+\.[^.@]{2,}$/) !== -1) {
        pwRes.textContent = "Email valida"
    } else {
        pwRes.textContent = "Email non valida"
    }
}) 