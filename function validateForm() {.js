function validateForm() {
    var x = document.getElementById('mail').value;
    if (x == "") {
        alert("Email must be filled out!");
        return false;
    } else {
        document.getElementById("info").innerHTML = "Now we are in this together.<br> Thanks for subscribing and having us along on your health and wellness<br>journey.";
        document.getElementById("info").style.color = "green";
    }
}
