let cart = [];

// إضافة منتج للسلة
function addToCart(name, price) {
    let item = cart.find(i => i.name === name);
    if (item) {
        item.qty++;
    } else {
        cart.push({ name: name, price: price, qty: 1 });
    }
    updateCartUI();
}

// تحديث عرض السلة والمجموع
function updateCartUI() {
    let cartItemsDiv = document.getElementById('cart-items');
    let cartCount = document.getElementById('cart-count');
    let cartTotal = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "لا توجد منتجات في السلة";
        cartCount.innerText = "0";
        cartTotal.innerText = "0";
        return;
    }

    let total = 0;
    let count = 0;
    cartItemsDiv.innerHTML = "";

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        count += item.qty;
        
        cartItemsDiv.innerHTML += `
            <div style="display:flex; justify-content:space-between; margin-bottom:8px; border-bottom:1px solid #eee; padding-bottom:5px;">
                <span>${item.name} (x${item.qty})</span>
                <span>${itemTotal.toLocaleString()} د.ع</span>
            </div>
        `;
    });

    cartCount.innerText = count;
    cartTotal.innerText = total.toLocaleString();
}

// إرسال الطلب عبر الواتساب
function sendToWhatsApp() {
    if (cart.length === 0) {
        alert("السلة فارغة! يرجى إضافة منتجات أولاً.");
        return;
    }

    // استبدل هذا الرقم برقم الواتساب الخاص بك (مع المفتاح الدولي بدون +)
    let phoneNumber = "9647842000516"; 

    let message = "مرحباً، أرغب بتأكيد الطلب التالي من الموقع:\n\n";
    let total = 0;

    cart.forEach(item => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;
        message += • ${item.name} × ${item.qty} = ${itemTotal.toLocaleString()} د.ع\n;
    });

    message += \n*المجموع الكلي:* ${total.toLocaleString()} د.ع;

    let encodedMessage = encodeURIComponent(message);
    window.open(https://wa.me/${phoneNumber}?text=${encodedMessage}, '_blank');
}
