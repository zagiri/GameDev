 // wait for page to load and if it is loading, set state to ready

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}


// Cart variable

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// billing form variable
// variable to get container, to be used in a loop or specific actions
let closeBilling = document.querySelector('#close-billing')
let billingContainer = document.querySelector(".billing-container");
let billingForm = document.querySelector(".billing-form");


// form control variable
// a placeholder for form inputs to be editted or checked for user input
// used for resetting value as well.
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const phoneNo = document.getElementById('phone');
const product = document.getElementById('product')


//disable store card at startup
// on page load startup disable card until right info are entered
const cardNum = document.getElementById('cardNumber')
const cardExpiry = document.getElementById('cardExpiry')
const cardCCV = document.getElementById('cardCCV')
const checkoutButton = document.getElementById('checkout')

cardNum.disabled = true
cardExpiry.disabled = true
cardCCV.disabled = true
checkoutButton.disabled = true

//event listeners for submit button, checked if button submit is pressed
form.addEventListener('submit', (e) => {
    checkInputs();
    e.preventDefault()
});

// event listener for focusing on input box in store billing form
email.addEventListener('focusin', (e) => {
    emailAlert()
});

email.addEventListener('focusout', (e) => {
    timeOut() // after focusing out of input box run timeOUt() method to display text and resetting text.
});


// event listener for reset button
// reset and remove text in input and remove validation for Credit card.
form.addEventListener('reset', (e) => {
    reset()
    e.preventDefault()
});


// method that alerts user to check email properly
function emailAlert(){
    const formControl = email.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = 'Email must be correct as it will be used for Confirmation'

    formControl.id = 'actives';

    console.log(formControl.id)
    console.log(small.innerText)

}

// timeout method that clears out issue text underneath input  box.
function timeOut() {
    const formControl = email.parentElement;
    setTimeout(function(){formControl.id = 'none';}, 2000);
}



// reset method, resets the value for input box.
function reset() {

    // gets vale inside input box
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const confirmValue = confirmEmail.value.trim();
    const phoneValue = phoneNo.value.trim();

    const formControl = email.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = 'Email must be correct as it will be used for Confirmation'
    formControl.id = 'none';



//  if statement to check whether input box are not empty and run setResetFor() method
    if (nameValue !== '' || nameValue != null) {

        setResetFor(name); // passing a variable for appropriate input id b
    }
    if (emailValue !== '' || emailValue != null) {
        setResetFor(email);
    }

    if (confirmValue !== '' || confirmValue != null) {

        setResetFor(confirmEmail);
    }

    if (phoneValue !== '' || phoneValue != null) {

        setResetFor(phoneNo);
    }


}

// form control section
//handle checking inputs and validates input, displaying issue if found and verifies if success.
function checkInputs(){
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const confirmValue = confirmEmail.value.trim();
    const phoneValue = phoneNo.value.trim();


    var count = 0 // used for credit card. if all input returns true. Count variable + 1

    // Alert user on type
    const formControl = email.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = 'Email must be correct as it will be used for Confirmation'
    formControl.id = 'none';



    // check if input field is null and returns an alert issue.
    if (nameValue === '' || nameValue == null) {

        setErrorFor(name, 'Username cannot be blank');
    } else {
        // if input have appropriate value setSuccessMethod ran and count + 1
        setSuccessFor(name);
        count += 1
    }
    if (emailValue === '' || emailValue == null) {
        setErrorFor(email, 'Email address cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email is not valid');
    } else if (emailValue != confirmValue) {
        setErrorFor(email, 'Email does not match');
    } else {
        setSuccessFor(email);
        count += 1
    }

    if (confirmValue === '' || confirmValue == null) {

        setErrorFor(confirmEmail, 'Email address cannot be blank');
    } else if (!isEmail(emailValue)) {
        setErrorFor(confirmEmail, 'Email is not valid');
    } else if (emailValue !== confirmValue) {
        setErrorFor(email, 'Email does not match');
    } else {
        setSuccessFor(confirmEmail);
        count += 1
    }

    if (phoneValue === '' || phoneValue == null) {

        setErrorFor(phoneNo, 'Phone No. cannot be blank');
    } else {
        setSuccessFor(phoneNo);
        count += 1
    }



    if (product.value == '' || product.value == null) {
        setErrorFor(product, 'Please select who to buy product for');
    } else {
        setSuccessFor(product);
        count += 1
    }


    // count variable used to enable credit card. check if all forms are succeeded then proceed to fill credit card form
    console.log(count)
    if (count >= 4) {
        cardNum.disabled = false
        cardExpiry.disabled = false
        cardCCV.disabled = false
        checkoutButton.disabled = false

    }


}


// alert message handler. set appropriate alert for user to follow.
function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = message

    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';

}

// method to reset credit card to disable and clear value in inputs.

function setResetFor(input) {
    let value = input;

    value.value = '';

    const formControl = input.parentElement;
    formControl.className = 'form-control';

    cardNum.disabled = true
    cardExpiry.disabled = true
    cardCCV.disabled = true
    checkoutButton.disabled = true
}


// similar to regex, check if email has appropriate text size and value.
function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//opens cart
cartIcon.onclick = () => {
    cart.classList.add("actives");
};


//closes cart
closeCart.onclick = () => {
    cart.classList.remove("actives");
};


//closes billing form

closeBilling.onclick = () => {
    cart.classList.add("actives");
    billingForm.className = "billing-form disable"
    billingContainer.className = "billing-container disable"
};


//  ready method if page successfully loaded. Method is running.
function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)


    //remove cart items when clicked
    for( var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    // when user change quantity > update total
    var quantityInput = document.getElementsByClassName('cart-quantity');
    for( var i = 0; i < quantityInput.length; i++) {
        var input = quantityInput[i];
        input.addEventListener('change', quantityChanged);
    }
    updateTotal();

    // add items to cart
    var addCart = document.getElementsByClassName('shop-item-button');
    for( var i = 0; i < addCart.length; i++) {
        var button = addCart[i];
        button.addEventListener("click", addCartClicked)
    }

    //purchase button
    document.getElementsByClassName('btn-buy')[0].addEventListener('click', buyButtonClicked);

    // clears cart on startup
    var cartContent = document.getElementsByClassName('cart-content')[0];
    if (cartContent.hasChildNodes()) {
        while  (cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }
        updateTotal()
    }

}


//purchase button is clicked. run method
function  buyButtonClicked() {
    var cartContent = document.getElementsByClassName('cart-content')[0];


    if (cartContent.hasChildNodes()) {

        cart.classList.remove("active");
        billingForm.className = "billing-form"
        billingContainer.className = "billing-container"

        while  (cartContent.hasChildNodes()){
            cartContent.removeChild(cartContent.firstChild);
        }
        updateTotal()
    } else {
        alert('please add item to cart');
        return;
    }

}

//add cart button
 // method runs when user click add to cart button. Method retrieves name, price and product image then send it to addItemToCart() Method.
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;

    var title = shopProducts.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('shop-item-price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, productImg);
    updateTotal()
}

//adding products. From addCartClicked method.
function addItemToCart(title, price, productImg) {
    var cartRow = document.createElement('div');
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-content')[0];
    var CartItemNames = cartItems.getElementsByClassName('cart-product-title');

    for (var i = 0; i < CartItemNames.length; i++) {
        if (CartItemNames[i].innerText.toLowerCase() == title.toLowerCase()) {
            alert('Item already in cart')
            return;
        }
    }

    var cartRowContents = ` <div class="cart-box">
                            <img src="${productImg}" class="cart-image">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price"><strong>${price}</strong></div>
                                <input type="number" value="1" class="cart-quantity">
                            </div>
                            <!--Remove item button-->
                            <i class='bx bxs-trash-alt cart-remove'></i>`
    cartRow.innerHTML = cartRowContents;
    cartItems.append(cartRow);
    cartRow.getElementsByClassName('cart-remove')[0].addEventListener('click', removeCartItem);
    cartRow.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
    updateTotal()
}


//remove cart items
function removeCartItem(event) {
    var buttonClicked = event.target;
    buttonClicked.parentElement.remove();
    updateTotal();
}

//quantity change
function quantityChanged(event) {
    var input = event.target;
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
    }
    updateTotal();
}

//update total
 //handles total on checkout summary and how many items in cart. updates on click event.
function updateTotal() {
    var cartContent = document.getElementsByClassName('cart-content')[0];
    var cartBoxes = document.getElementsByClassName('cart-box');



    var bag_size = 0;
    var total = 0;

    for( var i = 0; i < cartBoxes.length; i++) {
        var cartBox = cartBoxes[i];
        var priceElement = cartBox.getElementsByClassName('cart-price')[0];
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0];

        var price = parseFloat(priceElement.innerText.replace('$', ''));
        var quantity = quantityElement.value;

        // calculates price by price x quantity
        total = total + (price * quantity);
        bag_size = i + 1;


        //fixing decimals
        total = Math.round(total * 100) / 100;

    }
    // updates cart size and price total
    document.getElementsByClassName('bag-quantity')[0].innerText = bag_size;
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;

}