// function inputCheck() {
//     var firstname = document.getElementById("firstname").value;
//     var lastname = document.getElementById("lastname").value;
//     var address = document.getElementById("address").value;
//
//     document.getElementById("fnameerror").innerHTML = "";
//     document.getElementById("lnameerror").innerHTML = "";
//     document.getElementById("adderror").innerHTML = "";
//
//     var email = document.getElementById("email").value;
//     var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
//     if (!email.match(mailformat)) {
//         alert("Must enter a valid email address");
//         document.customerInfoForm.email.focus();
//         return false;
//     }
//     if (firstname === "" || firstname === null) {
//         document.getElementById("fnameerror").innerHTML = "Please enter a first name";
//         return false;
//     }
//     if (lastname === "" || lastname === null) {
//         document.getElementById("lnameerror").innerHTML = "Please enter a last name";
//         return false;
//     }
//     if (address === "" || address === null) {
//         document.getElementById("adderror").innerHTML = "Please enter an email address";
//         return false;
//     }
//     alert("Thanks for submitting your form");
//     resetInfo();
// }
//
// function resetInfo() {
//     document.getElementById("titleDropList").value = "ms";
//     var i;
//     var textboxes = document.getElementsByClassName("guestInfoTextBox");
//     for (i = 0; i < textboxes.length; i++) {
//         textboxes[i].value = "";
//     }
//     document.getElementById("adderror").style.display = "none";
//     document.getElementById("fnameerror").style.display = "none";
//     document.getElementById("lnameerror").style.display = "none";
// }
// form.addEventListener('submit', (e) => {
//     console.log("anything")
//     e.preventDefault()
// });
// function inputCheck() {
//     let x = document.forms["myForm"]["fname"].value;
//     if (x == "") {
//         alert("This is required to be filled out")
//         return false;
//     }
//     let x = document.forms["myForm"]["lname"].value;
//     if (x == "") {
//         alert("This is required to be filled out")
//         return false;
//     }
//     let x = document.forms["myForm"]["emailaddress"].value;
//     if (x == "") {
//         alert("This is required to be filled out")
//         return false;
//     }
//     if ( document.getElementById('country').selectedIndex == 0 ) {
//         alert ( "This is required to be filled out" );
//         return false;
//     }
//     let x = document.forms["myForm"]["subject"].value;
//     if (x == "") {
//         alert("This is required to be filled out")
//         return false;
//     }
//
// }
function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var mailformat = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var error_message = document.getElementById("error_message");

    error_message.style.padding = "10px";

    var text;
    if(name.length < 4){
        text = "Please Enter valid Name";
        error_message.innerHTML = text;
        return false;
    }
    if(isNaN(phone) || phone.length != 10){
        text = "Please Enter valid Phone Number";
        error_message.innerHTML = text;
        return false;
    }
    if (!email.match(mailformat) || email.length < 6){
        text = "Please Enter valid Email";
        error_message.innerHTML = text;
        return false;
    }
    if(message.length <= 0){
        text = "Please Enter a valid message";
        error_message.innerHTML = text;
        return false;
    }
    alert("Form Submitted Successfully!");
    return true;
}