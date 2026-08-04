/ =======================================
// Amazon Hyper Market V2
// =======================================

let cart = [];

// =========================
// إضافة منتج إلى السلة
// =========================

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

// =========================
// تحديث السلة
// =========================

function updateCart() {

    let items = document.getElementById("cart-items");
    let count = document.getElementById("cart-count");
    let total = document.getElementById("cart-total");

    items.innerHTML = "";

    let sum = 0;

    if(cart.length===0){

        items.innerHTML="لا توجد منتجات في السلة";

        count.innerHTML="0";

        total.innerHTML="0";

        return;

    }

    cart.forEach(function(item){

        let itemTotal=item.price*item.quantity;

        sum+=itemTotal;

        items.innerHTML +=`

<div class="cart-item">

<b>${item.name}</b>

<br><br>

<button onclick="decreaseQuantity('${item.name}')">➖</button>

<b>${item.quantity}</b>

<button onclick="increaseQuantity('${item.name}')">➕</button>

<br><br>

${itemTotal.toLocaleString()} د.ع

<br><br>

<button onclick="removeItem('${item.name}')">

🗑️ حذف

</button>

<hr>

</div>

`;

    });

    count.innerHTML=cart.length;

    total.innerHTML=sum.toLocaleString();

}
