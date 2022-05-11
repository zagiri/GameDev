function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";
    //Making sure the name is long enough to be an actual name
    var text;
    if(name.length == "" || name.length == null){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    //Making sure they have input a valid phone number
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    //Making sure their email is valid
    if (!email.match(mailformat) || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    //Making sure the contacter has put a message in the contact form
    if(message.length <= 0){
        text = "Please Enter a valid message";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}