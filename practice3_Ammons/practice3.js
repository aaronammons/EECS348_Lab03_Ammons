function passwords() {
    var first_password = document.getElementById("first_password").value;
    var second_password = document.getElementById("second_password").value;

    if (first_password.length < 8){
        alert("Oops! The length of the first password is less than 8 characters.")
    } else if (second_password.length < 8){
        alert("Oops! The length of the second passwrod is less than 8 characters.")
    }else if (first_password != second_password){
        alert("Oops! Passwords do not match.")
    }else{
        alert("Password Accepted!")
    }
}