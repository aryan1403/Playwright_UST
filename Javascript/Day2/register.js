function getName() {
    return document.getElementById("name").value;
}

function getEmail() {
    return document.getElementById("email").value;
}

function getAge() {
    return document.getElementById("age").value;
}

function validateName(name) {
    if(name.length >= 3) {
        return true;
    }
    return false;
}

function displayErrorMsg(msg) {
    document.getElementById("vmsg").innerHTML = msg;
}

function submit() {
    // fetch name, email, age
    const name = getName();
    const email = getEmail();
    const age = getAge();

    console.log(`${name}, ${email}, ${age}`);

    const vname = validateName(name);
    if(!vname) {
        displayErrorMsg("Name should be having atleast 3 characters");
    }
    // Validate
}