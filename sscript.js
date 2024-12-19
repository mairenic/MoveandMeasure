function validateForm() {
    var name = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match. Please try again.");
        return false;
    }

    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("All fields are required. Please complete the form.");
        return false;
    }

    document.getElementById("signUpMessage").style.display = "block";
    return false; 
}
