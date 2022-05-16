

//variablel placeholder
var active = `class="actives"`

var home;
var game;
var staff;
var store;
var about;
var contact;

// for css styling
// Would change value class to active if user is in said pages.
if ( document.URL.includes("index.html") ) {
    home = active;
} else if ( document.URL.includes("game.html") ) {
    game = active;
} else if ( document.URL.includes("staff.html") ) {
    staff = active;
} else if ( document.URL.includes("store.html") ) {
    store = active;
} else if ( document.URL.includes("about.html") ) {
    about = active;
} else if ( document.URL.includes("contact.html") ) {
    contact = active;
}


// handles check if user is in any other page other than store
// store has different nav bar (added shopping cart, etc.)
if ( !document.URL.includes("store.html") ) {
    document.write(`<div class="header-nav">
        <header>
            <div class="logo"><a href="index.html"><img src="/assets/logoPNG_DropShadow.png" alt="logo" class="logo"></a></div>

            <ul>
                <li><a href="index.html" ${home}>Home</a></li>
                <li><a href="game.html" ${game}>Game</a></li>
                <li><a href="staff.html" ${staff}>Staff</a></li>
                <li><a href="store.html">Store</a></li>
                <li><a href="about.html" ${about}>FAQ</a></li>
                <li><a href="contact.html" ${contact}>Contact</a></li>
                <li>
                    <div class="search-container">
                        <form class="search-form" action="/action_page.php">
                           <input type="text" placeholder="Search.." name="search">
                        </form>
                    </div>
                </li>
                 <li><button type="submit"><i class='bx bx-search'></i></li>
            </ul>
        </header>
    </div>`)
} else {
    document.write(`
        <header>
            <div class="logo"><a href="index.html"><img src="/assets/logoPNG_DropShadow.png" alt="logo" class="logo"></a></div>
        
            <ul>
                <li><a href="index.html" >Home</a></li>
                <li><a href="game.html">Game</a></li>
                <li><a href="staff.html">Staff</a></li>
                <li><a href="store.html" class="actives">Store</a></li>
                <li><a href="about.html">FAQ</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li>
                    <i class='bx bxs-shopping-bag' id="cart-icon"></i>
                    <div class="cart">
                        <h2 class="cart-title">Your Cart</h2>
                        <!--Content-->
                        <div class="cart-content">
                        </div>
                        <!--Total-->
                        <div class="total">
                            <div class="total-title">Total</div>
                            <div class="total-price">$0.00</div>
                        </div>
                        <!--purchase button-->
                        <button type="button" class="btn-buy">Complete Purchase</button>
                        <!--cart close-->
                        <i class='bx bx-x' id="close-cart"></i>
                    </div>
                </li>
                <li><span class="bag-quantity">0</span></li>
                                <li>
                    <div class="search-container">
                        <form class="search-form" action="/action_page.php">
                           <input type="text" placeholder="Search.." name="search">
                        </form>
                    </div>
                </li>
                 <li><button type="submit"><i class='bx bx-search'></i></li>
            </ul>
            </ul>
        </header>
        
        </ul>
        </header>
     `)
}


