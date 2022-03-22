// Cart

let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

// form
const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const confirmEmail = document.getElementById('confirm-email');
const phoneNo = document.getElementById('phone');

form.addEventListener('submit', (e) => {
    checkInputs();
    e.preventDefault()
});

email.addEventListener('focusin', (e) => {
    emailAlert()
});

email.addEventListener('focusout', (e) => {
    timeOut()
});


function emailAlert(){
    const formControl = email.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = 'Email must be correct as it will be used for Confirmation'

    formControl.id = 'active';
    // timeOut()

    console.log(formControl.id)
    console.log(small.innerText)

}

function timeOut() {
    const formControl = email.parentElement;
    setTimeout(function(){formControl.id = 'none';}, 2000);
}

function checkInputs(){
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const confirmValue = confirmEmail.value.trim();
    const phoneValue = phoneNo.value.trim();
    var count = 0

    // Alert user on type
    const formControl = email.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = 'Email must be correct as it will be used for Confirmation'
    formControl.id = 'none';

    if (nameValue === '' || nameValue == null) {

        setErrorFor(name, 'Username cannot be blank');
    } else {
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


    if (count === 4) {
        alert("Good job")
    } else {
        console.log(count)
    }


}

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

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}


//open cart
cartIcon.onclick = () => {
    cart.classList.add("active");
};


//close cart
closeCart.onclick = () => {
    cart.classList.remove("active");
};



// cart working

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready();
}

function ready() {
    var removeCartButtons = document.getElementsByClassName('cart-remove')
    console.log(removeCartButtons)

    for( var i = 0; i < removeCartButtons.length; i++) {
        var button = removeCartButtons[i];
        button.addEventListener('click', removeCartItem);
    }

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


//purchase
function  buyButtonClicked() {
    var cartContent = document.getElementsByClassName('cart-content')[0];

    if (cartContent.hasChildNodes()) {
        alert('your Order is placed');

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
function addCartClicked(event) {
    var button = event.target;
    var shopProducts = button.parentElement.parentElement;

    var title = shopProducts.getElementsByClassName('shop-item-title')[0].innerText;
    var price = shopProducts.getElementsByClassName('shop-item-price')[0].innerText;
    var productImg = shopProducts.getElementsByClassName('shop-item-image')[0].src;
    addItemToCart(title, price, productImg);
    updateTotal()
}

//adding products
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


        total = total + (price * quantity);
        bag_size = i + 1;


        //fixing decimals
        total = Math.round(total * 100) / 100;

    }
    document.getElementsByClassName('bag-quantity')[0].innerText = bag_size;
    document.getElementsByClassName('total-price')[0].innerText = '$' + total;

}