let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

function addToCart(name, price) {

    let found = cart.find(function(item) {
        return item.name === name;
    });

    if (found) {
        found.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    saveCart();
    updateCart();
}

function increase(index) {
    cart[index].quantity++;
    saveCart();
    updateCart();
}

function decrease(index) {

    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index,1);
    }

    saveCart();
    updateCart();
}

function removeItem(index){
    cart.splice(index,1);
    saveCart();
    updateCart();
}
function updateCart() {

    let items = document.getElementById("cart-items");
    let count = document.getElementById("cart-count");
    let total = document.getElementById("cart-total");

    if (!items || !count || !total) return;

    items.innerHTML = "";

    let sum = 0;

    if (cart.length === 0) {

        items.innerHTML = "<p>لا توجد منتجات في السلة</p>";

        count.textContent = "0";
        total.textContent = "0";

        return;
    }

    cart.forEach(function(item,index){

        let itemTotal = item.price * item.quantity;

        sum += itemTotal;

        items.innerHTML += `
        <div class="cart-item">

            <b>${item.name}</b><br>

            السعر: ${item.price.toLocaleString()} د.ع<br>

            الكمية:
            <button onclick="decrease(${index})">➖</button>

            <b>${item.quantity}</b>

            <button onclick="increase(${index})">➕</button>

            <button onclick="removeItem(${index})">🗑️</button>

            <br>

            المجموع:
            ${itemTotal.toLocaleString()} د.ع

            <hr>

        </div>
        `;

    });

    count.textContent = cart.length;

    total.textContent = sum.toLocaleString();

}function sendToWhatsApp(){

    let customerName = document.getElementById("customer-name").value;
    let customerPhone = document.getElementById("customer-phone").value;
    let customerAddress = document.getElementById("customer-address").value;
    let customerNote = document.getElementById("customer-note").value;

    if(customerName=="" || customerPhone=="" || customerAddress==""){
        alert("يرجى إدخال الاسم ورقم الهاتف والعنوان");
        return;
    }

    if(cart.length===0){
        alert("السلة فارغة");
        return;
    }

    let message =
    "🛒 طلب جديد\n\n" +
    "👤 الاسم: " + customerName + "\n" +
    "📞 الهاتف: " + customerPhone + "\n" +
    "📍 العنوان: " + customerAddress + "\n";

    if(customerNote!=""){
        message += "📝 ملاحظات: " + customerNote + "\n";
    }

    message += "\n📦 المنتجات:\n\n";

    let total = 0;

    cart.forEach(function(item){

        let itemTotal = item.price * item.quantity;

        total += itemTotal;

        message +=
        "• " + item.name +
        " × " + item.quantity +
        " = " + itemTotal.toLocaleString() +
        " د.ع\n";

    });

    message += "\n💰 المجموع: " + total.toLocaleString() + " د.ع";

    let phone = "9647842000516"; // ضع رقم واتساب متجرك هنا

    location.href =
"https://wa.me/" + phone + "?text=" + encodeURIComponent(message)
    );

}

window.onload = function () {
    updateCart();
};
// تحديث السلة إذا تغير التخزين
window.addEventListener("storage", function () {
    let saved = localStorage.getItem("cart");

    if (saved) {
        cart = JSON.parse(saved);
    } else {
        cart = [];
    }

    updateCart();
});

// تفريغ السلة بعد إرسال الطلب (اختياري)
function clearCart() {

    cart = [];

    saveCart();

    updateCart();

}
