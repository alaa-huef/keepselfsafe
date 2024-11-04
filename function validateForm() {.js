function validateForm() {
    var email = document.getElementById('mail').value;
    
    // Check if email is empty
    if (email === "") {
        alert("Email must be filled out!");
        return false;
    } else {
        // Success message
        document.getElementById("info").innerHTML = "Now we are in this together.<br> Thanks for subscribing and having us along on your health and wellness journey.";
        document.getElementById("info").style.color = "green";
        return true;
    }
}
