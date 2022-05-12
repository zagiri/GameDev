function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    //Validation of Name
    var text;
    if(name.length < 4){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    //Validation of Phone Number
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    //Validation of Email
    if (!email.match(mailformat) || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    //Validation of Message
    if(message.length <= 0){
        text = "Please Enter a valid message";
        error_message.innerHTML = text;
        return false;
    }
    //Alerting user of form being submitted
    alert("Form Submitted Successfully!");
    return true;
}