function addToCart(name, price) {function addToCart(name, price) {function addToCart(name, price) {

    let found = cart.find(item => item.name === name);

    if (found) {
        found.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

function updateCart() {

    let items = document.getElementById("cart-items");
    let count = document.getElementById("cart-count");
    let total = document.getElementById("cart-total");

    items.innerHTML = "";

    let sum = 0;

    cart.forEach(function(item){

       function addToCart(name, price) {

    let found = cart.find(item => item.name === name);

    if (found) {
        found.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    updateCart();
}

     sum += item.price * item.quantity;

    });

    count.innerHTML = cart.length;
    total.innerHTML = sum.toLocaleString();

    if(cart.length == 0){
        items.innerHTML = "لا توجد منتجات في السلة";
    }

}

function sendToWhatsApp(){

    if(cart.length == 0){
        alert("السلة فارغة");
        return;
    }

    let message = "السلام عليكم، أريد طلب:\n\n";

    cart.forEach(function(item){
        message += item.name + " - " + item.price.toLocaleString() + " د.ع\n";
    });

    let total = cart.reduce((a,b)=>a+b.price,0);

    message += "\nالمجموع: " + total.toLocaleString() + " د.ع";

    window.open("https://wa.me/9647700000000?text="+encodeURIComponent(message));
}
