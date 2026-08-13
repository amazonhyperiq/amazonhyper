/* =========================================================
   أمازون هايبر ماركت
   script.js
   ========================================================= */


/* =========================
   إعدادات المتجر
   ========================= */

// ضع رقم واتساب المتجر هنا لاحقًا.
// مثال العراق: 9647XXXXXXXXX
const WHATSAPP_NUMBER = "9647842000516";


/* =========================
   السلة
   ========================= */

let cart = [];


/* =========================
   المنتجات ذات الأسعار
   ========================= */

const products = {

meat: [
    {
        id: "meat-lamb-bone",
        name: "لحم غنم بالعظم",
        price: 22000
    },
    {
        id: "meat-minced-lamb-beef",
        name: "لحم مثروم غنم وعجل",
        price: 19000
    },
    {
        id: "meat-minced-beef-no-fat",
        name: "لحم مثروم عجل بدون دهن",
        price: 19000
    },
    {
        id: "meat-beef-cubes",
        name: "لحم عجل قطع مكعبات",
        price: 19000
    },
    {
        id: "meat-lamb-boneless",
        name: "لحم غنم شرح",
        price: 27000
    },
    {
        id: "meat-lamb-offal",
        name: "معلاك غنم",
        price: 16000
    },
    {
        id: "meat-lamb-fat",
        name: "لية غنم",
        price: 16000
    },
    {
        id: "meat-jalfray",
        name: "جلفراي لحم",
        price: 23000
    },
    {
        id: "meat-lamb-ribs",
        name: "ضلوع غنم",
        price: 25000
    },
    {
        id: "meat-lamb-pacha",
        name: "باجة غنم",
        price: 12000
    },
    {
        id: "meat-lamb-shanks",
        name: "زنود غنم",
        price: 25000
    },
    {
        id: "meat-steak",
        name: "ستيك لحم",
        price: 23000
    },
    {
        id: "meat-beef-backstrap",
        name: "حبل ظهر عجل خشن",
        price: 25000
    },
    {
        id: "meat-kas",
        name: "كص لحم",
        price: 23000
    },
    {
        id: "meat-beef-trotters",
        name: "كوارع عجل",
        price: 13000
    },
    {
        id: "meat-lamb-eggs",
        name: "بيض غنم",
        price: 0
    },
    {
        id: "meat-lamb-tikka",
        name: "تكة غنم",
        price: 27000
    },
    {
        id: "meat-iraqi-burger",
        name: "بركر لحم عراقي",
        price: 18500
    },
    {
        id: "meat-iraqi-pastrami",
        name: "باسطرما لحم عراقي",
        price: 18500
    }
],
    chicken: [
        {
            id: "chicken-slaughter",
            name: "دجاج ذبح عراقي",
            price: 5750
        },
        {
            id: "chicken-breast",
            name: "صدر دجاج عراقي",
            price: 8000
        },
        {
            id: "chicken-wings",
            name: "أجنحة دجاج عراقي",
            price: 5500
        },
        {
            id: "chicken-thighs",
            name: "أفخاذ دجاج عراقي",
            price: 6000
        },
        {
            id: "chicken-liver",
            name: "كبدة دجاج عراقي",
            price: 6000
        },
        {
            id: "chicken-minced",
            name: "مثروم دجاج",
            price: 9000
        }
    ]

};


/* =========================
   المنتجات بدون أسعار
   ========================= */

const weightProducts = {

   produce: [
    { name: "طماطم", price: 750 },
    { name: "بطاطا", price: 750 },
    { name: "خيار", price: 750 },
    { name: "باذنجان", price: 750 },
    { name: "بروكلي", price: 5000 },
    { name: "بصل أحمر", price: 1000 },
    { name: "بصل كرستال", price: 1000 },
    { name: "بصل أصفر", price: 1000 },
    { name: "بصل أخضر", price: 0, unavailable: true },
    { name: "شجر", price: 1000 },
    { name: "خس", price: 1000 },
    { name: "لهانة حمراء", price: 1250 },
    { name: "لهانة خضراء", price: 1250 },
    { name: "قرنابيط", price: 1250 },
    { name: "زنجبيل طازج", price: 7000 },
    { name: "طماطة كزرية", price: 3500 },
    { name: "رقي", price: 750 },
    { name: "فلفل بارد", price: 1500 },
    { name: "فلفل حار", price: 2000 },
    { name: "فلفل ألوان علب", price: 1000 },
    { name: "فلفل مزحلط ألوان", price: 3500 },
    { name: "تمر عراقي", price: 3500 },
    { name: "تفاح أحمر", price: 3500 },
    { name: "تفاح أصفر", price: 3500 },
    { name: "تفاح أخضر", price: 3500 },
    { name: "تفاح عراقي", price: 1250 },
    { name: "موز", price: 2000 },
    { name: "كرز", price: 3000 },
    { name: "ألو أحمر", price: 2250 },
    { name: "ألو أصفر", price: 2500 },
    { name: "بطيخ", price: 1250 },
    { name: "رمان", price: 3500 },
    { name: "خوخ مسكي", price: 2500 },
    { name: "خوخ صوفي", price: 2500 },
    { name: "خوخ كعكي", price: 2750 },
    { name: "مشمش", price: 3750 },
    { name: "منكة", price: 3500 },
    { name: "أفاكادو", price: 9000 },
    { name: "عنب أسود", price: 3500 },
    { name: "عنب أبيض", price: 3500 }
],

    legumes: [
        "حمص",
        "عدس",
        "عدس أخضر",
        "فريكة",
        "سكر",
        "رز",
        "حليب",
        "جريش",
        "برغل",
        "برغل ناعم",
        "برغل خشن",
        "شوفان",
        "فاصوليا يابسة",
        "طرشانة",
        "علوجة",
        "نشاء",
        "سميد",
        "نومي بصرة أسود",
        "نومي بصرة أشقر",
        "نومي بصرة عصير",
        "لوبيا حمراء",
        "ماش",
        "حبية",
        "سمسم محمص",
        "سمسم خام",
        "طحين حمص",
        "طحين تمن",
        "فول",
        "شاي خلطة خاصة",
        "هيل",
        "هيل مطحون"
    ],

    eggs: [
        "بيض أحمر - طبقة",
        "بيض أحمر - نصف طبقة",
        "بيض أبيض - طبقة",
        "بيض أبيض - نصف طبقة",
        "بيض نباتي أحمر - طبقة",
        "بيض نباتي أحمر - نصف طبقة",
        "بيض عرب - نصف طبقة"
    ]

};


/* =========================
   المواد الغذائية
   ========================= */

const foodProducts = [

    "رز محمود 4.5 كيلو",
    "رز محمود 9 كيلو",
    "رز جوكر 4.5 كيلو",
    "رز جوكر 9 كيلو",
    "رز 272 - 4.5 كيلو",
    "رز ريزي 5 كيلو",
    "رز كرجية 4.5 كيلو",
    "رز سفرة 4.5 كيلو",
    "رز ذهب الذهب 4 كيلو",
    "رز كلبهار 4.5 كيلو",
    "رز أبو كاس 4.5 كيلو",
    "تمن عنبر 1 كيلو",
    "تمن عنبر 5 كيلو",

    "دهن جنة 700 غم معدني",

    "زيت عافية 1.5 لتر",
    "زيت زير 1 لتر",
    "زيت الدار 1 لتر",
    "زيت التونسا 1 لتر",

    "طحين بشلر",
    "طحين الفاخر",

    "ملح كيس",
    "ملح علبة",
    "سكر 1 كيلو",

    "معجون زير كبير",
    "معجون زير صغير",

    "حمص الكسيح - علبة معدنية",
    "فاصوليا زجاج",
    "حمص زجاج",
    "باقلاء - علبة معدنية",
    "فطر مقطع - علبة معدنية",
    "فطر كامل - علبة معدنية",
    "بزاليا - علبة معدنية",
    "بزاليا وجزر - علبة معدنية",
    "خضراوات وبزاليا وجزر - علبة معدنية",
    "حمص بطحينة - علبة معدنية",

    "لانشون تغذية لحم كبير",
    "لانشون تغذية لحم صغير",
    "لانشون تغذية دجاج كبير",
    "لانشون تغذية دجاج صغير",

    "صوصج تغذية دجاج",
    "صوصج تغذية لحم",

    "لحم مثروم أكزيتر - علبة معدنية",

    "سردين حار",
    "سردين بازد",

    "معجون التونسا كبير",
    "معجون التونسا صغير"
];


/* =========================
   عرض الصفحة الرئيسية
   ========================= */

function showHome() {

    const content = document.getElementById("content");
    const title = document.getElementById("category-title");
    const backButton = document.getElementById("back-home");

    title.textContent = "مرحباً بك في أمازون هايبر ماركت";

    backButton.hidden = true;

    content.innerHTML = `
        <div class="welcome-box">

            <div class="welcome-icon">🛒</div>

            <h2>أهلاً وسهلاً بكم</h2>

            <p>
                اختر أحد الأقسام أعلاه لعرض المنتجات
            </p>

            <p class="welcome-note">
                المنتجات التي لا يظهر لها سعر يتم احتساب سعرها
                حسب سعر اليوم عند تجهيز الطلب.
            </p>

        </div>
    `;
}


/* =========================
   عرض الأقسام
   ========================= */

function showCategory(category) {

    const content = document.getElementById("content");
    const title = document.getElementById("category-title");
    const backButton = document.getElementById("back-home");

    backButton.hidden = false;


    /* اللحوم */

    if (category === "meat") {

        title.textContent = "🥩 قسم اللحوم";

        renderPricedProducts(
            products.meat,
            content
        );

        return;
    }


    /* الدجاج */

    if (category === "chicken") {

        title.textContent = "🐔 قسم الدجاج";

        renderPricedProducts(
            products.chicken,
            content
        );

        return;
    }


    /* الخضار والفواكه */

    if (category === "produce") {

        title.textContent = "🥬 قسم الفواكه والخضراوات";

        renderWeightProducts(
            weightProducts.produce,
            content
        );

        return;
    }


    /* البقوليات */

    if (category === "legumes") {

        title.textContent = "🫘 البقوليات والمواد المباعة بالوزن";

        renderWeightProducts(
            weightProducts.legumes,
            content
        );

        return;
    }


    /* البيض */

    if (category === "eggs") {

        title.textContent = "🥚 قسم البيض";

        renderWeightProducts(
            weightProducts.eggs,
            content
        );

        return;
    }


    /* المواد الغذائية */

    if (category === "food") {

        title.textContent = "🍚 قسم المواد الغذائية";

        renderFoodProducts(
            foodProducts,
            content
        );

        return;
    }


    /* الأقسام التي سنضيف منتجاتها لاحقًا */

    title.textContent = "القسم";

    content.innerHTML = `
        <div class="welcome-box">

            <div class="welcome-icon">🚧</div>

            <h2>القسم قيد التجهيز</h2>

            <p>
                سيتم إضافة المنتجات إلى هذا القسم لاحقًا.
            </p>

        </div>
    `;
}


/* =========================
   عرض المنتجات ذات الأسعار
   ========================= */

function renderPricedProducts(list, container) {

    if (!list || list.length === 0) {

        container.innerHTML = `
            <div class="empty-result">
                لا توجد منتجات حاليًا.
            </div>
        `;

        return;
    }


    let html = `<div class="product-list">`;


    list.forEach(product => {

        html += `
            <div class="product">

                <h3>${escapeHTML(product.name)}</h3>

                <div class="product-price">
                    ${formatPrice(product.price)} د.ع / كغم
                </div>

                <div class="quantity-control">

                    <button
                        type="button"
                        onclick="changeProductQuantity('${product.id}', -1)">
                        −
                    </button>

                    <span id="quantity-${product.id}">
                        1
                    </span>

                    <button
                        type="button"
                        onclick="changeProductQuantity('${product.id}', 1)">
                        +
                    </button>

                </div>

                <button
                    type="button"
                    class="add-button"
                    onclick="addPricedProduct('${product.id}')">

                    🛒 أضف إلى السلة

                </button>

            </div>
        `;

    });


    html += `</div>`;

    container.innerHTML = html;
}


/* =========================
   عرض المنتجات بدون أسعار
   ========================= */

function renderWeightProducts(list, container) {

    if (!list || list.length === 0) {

        container.innerHTML = `
            <div class="empty-result">
                لا توجد منتجات حاليًا.
            </div>
        `;

        return;
    }


    let html = `<div class="product-list">`;


    list.forEach((name, index) => {

        const safeId = `weight-${index}`;

        html += `
            <div class="product">

                <h3>
                    ${escapeHTML(name)}
                </h3>

                <div class="no-price-note">
                    السعر حسب سعر اليوم
                </div>

                <div class="weight-controls">

                    <input
                        type="number"
                        id="${safeId}-quantity"
                        min="0.1"
                        step="0.1"
                        value="1"
                        inputmode="decimal"
                        aria-label="الكمية">

                    <select
                        id="${safeId}-unit"
                        aria-label="الوحدة">

                        <option value="كغم">كغم</option>
                        <option value="غرام">غرام</option>
                        <option value="حبة">حبة</option>
                        <option value="ربطة">ربطة</option>
                        <option value="علبة">علبة</option>

                    </select>

                </div>

                <button
                    type="button"
                    class="add-button"
                    onclick="addWeightProduct(
                        '${escapeAttribute(name)}',
                        '${safeId}'
                    )">

                    🛒 إضافة إلى الطلب

                </button>

            </div>
        `;

    });


    html += `</div>`;

    container.innerHTML = html;
}


/* =========================
   عرض المواد الغذائية
   ========================= */

function renderFoodProducts(list, container) {

    if (!list || list.length === 0) {

        container.innerHTML = `
            <div class="empty-result">
                لا توجد منتجات حاليًا.
            </div>
        `;

        return;
    }


    let html = `<div class="product-list">`;


    list.forEach((name, index) => {

        const safeId = `food-${index}`;

        html += `
            <div class="product">

                <h3>
                    ${escapeHTML(name)}
                </h3>

                <div class="no-price-note">
                    السعر حسب سعر اليوم
                </div>

                <div class="weight-controls">

                    <input
                        type="number"
                        id="${safeId}-quantity"
                        min="1"
                        step="1"
                        value="1"
                        inputmode="numeric"
                        aria-label="الكمية">

                    <select
                        id="${safeId}-unit"
                        aria-label="الوحدة">

                        <option value="حبة">حبة</option>
                        <option value="كرتون">كرتون</option>

                    </select>

                </div>

                <button
                    type="button"
                    class="add-button"
                    onclick="addWeightProduct(
                        '${escapeAttribute(name)}',
                        '${safeId}'
                    )">

                    🛒 إضافة إلى الطلب

                </button>

            </div>
        `;

    });


    html += `</div>`;

    container.innerHTML = html;
}


/* =========================
   كمية المنتجات ذات السعر
   ========================= */

function changeProductQuantity(id, amount) {

    const element = document.getElementById(`quantity-${id}`);

    if (!element) {
        return;
    }

    let quantity = parseInt(element.textContent, 10);

    if (isNaN(quantity)) {
        quantity = 1;
    }

    quantity += amount;

    if (quantity < 1) {
        quantity = 1;
    }

    element.textContent = quantity;
}


/* =========================
   إضافة منتج بسعر
   ========================= */

function addPricedProduct(id) {

    let product = null;

    for (const category in products) {

        const found = products[category].find(
            item => item.id === id
        );

        if (found) {
            product = found;
            break;
        }

    }


    if (!product) {
        return;
    }


    const quantityElement =
        document.getElementById(`quantity-${id}`);


    let quantity = 1;


    if (quantityElement) {

        quantity =
            parseInt(quantityElement.textContent, 10);

    }


    if (isNaN(quantity) || quantity < 1) {
        quantity = 1;
    }


    const existing = cart.find(
        item =>
            item.id === product.id &&
            item.type === "priced"
    );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            type: "priced",
            unit: "كغم"

        });

    }


    updateCart();

    showToast("تمت إضافة المنتج إلى السلة");

}


/* =========================
   إضافة منتج بدون سعر
   ========================= */

function addWeightProduct(name, elementId) {

    const quantityElement =
        document.getElementById(`${elementId}-quantity`);

    const unitElement =
        document.getElementById(`${elementId}-unit`);


    if (!quantityElement || !unitElement) {
        return;
    }


    const quantity =
        parseFloat(quantityElement.value);


    const unit =
        unitElement.value;


    if (!quantity || quantity <= 0) {

        showToast("أدخل كمية صحيحة");

        return;
    }


    const id =
        `${elementId}-${name}`;


    const existing = cart.find(
        item =>
            item.id === id &&
            item.type === "no-price"
    );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: id,
            name: name,
            quantity: quantity,
            unit: unit,
            type: "no-price",
            price: null

        });

    }


    updateCart();

    showToast("تمت إضافة المنتج إلى الطلب");

}


/* =========================
   تحديث السلة
   ========================= */

function updateCart() {

    const cartItems =
        document.getElementById("cart-items");


    const cartCount =
        document.getElementById("cart-count");


    const floatingCount =
        document.getElementById("floating-cart-count");


    const totalItems =
        document.getElementById("cart-total-items");


    const totalPrice =
        document.getElementById("cart-total-price");


    let count = 0;

    let total = 0;


    cart.forEach(item => {

        count += item.quantity;


        if (
            item.type === "priced" &&
            typeof item.price === "number"
        ) {

            total +=
                item.price * item.quantity;

        }

    });


    cartCount.textContent =
        formatNumber(count);


    floatingCount.textContent =
        formatNumber(count);


    totalItems.textContent =
        formatNumber(count);


    totalPrice.textContent =
        `${formatPrice(total)} د.ع`;


    renderCartItems(cartItems);

}


/* =========================
   عرض محتويات السلة
   ========================= */

function renderCartItems(container) {

    if (cart.length === 0) {

        container.innerHTML = `
            <div class="empty-cart">
                السلة فارغة
            </div>
        `;

        return;
    }


    let html = "";


    cart.forEach((item, index) => {

        const itemTotal =
            item.type === "priced"
                ? item.price * item.quantity
                : null;


        html += `
            <div class="cart-item">

                <div class="cart-item-title">
                    ${escapeHTML(item.name)}
                </div>

                <div class="cart-item-details">

                    الكمية:
                    ${formatQuantity(item.quantity)}
                    ${escapeHTML(item.unit)}

                </div>

                <div class="cart-item-price">

                    ${
                        itemTotal !== null
                            ? `${formatPrice(itemTotal)} د.ع`
                            : "السعر حسب سعر اليوم"
                    }

                </div>

                <div class="cart-item-actions">

                    <button
                        type="button"
                        onclick="changeCartQuantity(${index}, -1)">
                        −
                    </button>

                    <strong>
                        ${formatQuantity(item.quantity)}
                    </strong>

                    <button
                        type="button"
                        onclick="changeCartQuantity(${index}, 1)">
                        +
                    </button>

                    <button
                        type="button"
                        class="remove-item"
                        onclick="removeCartItem(${index})">
                        حذف
                    </button>

                </div>

            </div>
        `;

    });


    container.innerHTML = html;
}


/* =========================
   تغيير كمية داخل السلة
   ========================= */

function changeCartQuantity(index, amount) {

    if (!cart[index]) {
        return;
    }


    cart[index].quantity += amount;


    if (cart[index].quantity <= 0) {

        cart.splice(index, 1);

    }


    updateCart();

}


/* =========================
   حذف منتج من السلة
   ========================= */

function removeCartItem(index) {

    if (!cart[index]) {
        return;
    }


    cart.splice(index, 1);

    updateCart();

}


/* =========================
   فتح السلة
   ========================= */

function openCart() {

    const modal =
        document.getElementById("cart-modal");


    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow = "hidden";

}


/* =========================
   إغلاق السلة
   ========================= */

function closeCart() {

    const modal =
        document.getElementById("cart-modal");


    modal.classList.remove("active");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow = "";

}


/* =========================
   إرسال الطلب إلى واتساب
   ========================= */

function sendToWhatsApp() {

    if (cart.length === 0) {

        showToast("السلة فارغة");

        return;
    }
const confirmOrder = confirm(
    "⚠️ تنبيه للزبون\n\n" +
    "أسعار المواد التي تُباع بالوزن، مثل اللحوم والدجاج والخضراوات والفواكه، " +
    "قابلة للزيادة أو النقصان حسب الوزن الفعلي عند تجهيز الطلب.\n\n" +
    "ويُحتسب السعر النهائي وفق الوزن الفعلي للمنتج.\n\n" +
    "هل تريد المتابعة وإرسال الطلب إلى WhatsApp؟"
);

if (!confirmOrder) {
    return;
}

    const customerName =
        document
            .getElementById("customer-name")
            .value
            .trim();


    const customerPhone =
        document
            .getElementById("customer-phone")
            .value
            .trim();


    const customerAddress =
        document
            .getElementById("customer-address")
            .value
            .trim();


    const customerNote =
        document
            .getElementById("customer-note")
            .value
            .trim();


    const extraProducts =
        document
            .getElementById("extra-products")
            .value
            .trim();


    if (!customerName) {

        showToast("اكتب اسم الزبون أولاً");

        return;
    }


    if (!customerPhone) {

        showToast("اكتب رقم الهاتف أولاً");

        return;
    }


    if (!customerAddress) {

        showToast("اكتب العنوان أولاً");

        return;
    }


    let message = "";

    message += "🛒 *طلب جديد - أمازون هايبر ماركت*";
    message += "\n";
    message += "━━━━━━━━━━━━━━━━";
    message += "\n\n";


    message += "👤 *بيانات الزبون*";
    message += "\n";
    message += `الاسم: ${customerName}`;
    message += "\n";
    message += `الهاتف: ${customerPhone}`;
    message += "\n";
    message += `العنوان: ${customerAddress}`;
    message += "\n";


    if (customerNote) {

        message += `الملاحظات: ${customerNote}`;
        message += "\n";

    }


    message += "\n";
    message += "🛍️ *المنتجات*";
    message += "\n";
    message += "━━━━━━━━━━━━━━━━";
    message += "\n";


    let pricedTotal = 0;


    cart.forEach((item, index) => {

        message += `${index + 1}. ${item.name}`;
        message += "\n";

        message += `الكمية: ${formatQuantity(item.quantity)} ${item.unit}`;
        message += "\n";


        if (
            item.type === "priced" &&
            typeof item.price === "number"
        ) {

            const itemTotal =
                item.price * item.quantity;


            pricedTotal += itemTotal;


            message += `السعر: ${formatPrice(item.price)} د.ع / كغم`;
            message += "\n";

            message += `الإجمالي: ${formatPrice(itemTotal)} د.ع`;
            message += "\n";

        } else {

            message += "السعر: يحدد حسب سعر اليوم";
            message += "\n";

        }


        message += "\n";

    });


    message += "━━━━━━━━━━━━━━━━";
    message += "\n";


    message += `💰 مجموع المنتجات ذات الأسعار الثابتة: ${formatPrice(pricedTotal)} د.ع`;
    message += "\n";


    message += "\n";


    if (extraProducts) {

        message += "📝 *مواد أخرى طلبها الزبون*";
        message += "\n";
        message += extraProducts;
        message += "\n\n";

    }


    message += "شكراً لتسوقكم من أمازون هايبر ماركت 🛒";


    const encodedMessage =
        encodeURIComponent(message);


    const whatsappURL =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;


    window.location.href = whatsappURL;

}


/* =========================
   البحث
   ========================= */

document
    .getElementById("search-input")
    .addEventListener(
        "input",
        handleSearch
    );


function handleSearch(event) {

    const query =
        event.target.value
            .trim()
            .toLowerCase();


    if (!query) {
        return;
    }


    const results = [];


    /* المنتجات ذات السعر */

    Object.values(products)
        .flat()
        .forEach(product => {

            if (
                product.name
                    .toLowerCase()
                    .includes(query)
            ) {

                results.push({
                    ...product,
                    type: "priced"
                });

            }

        });


    /* المنتجات بدون سعر */

    Object.values(weightProducts)
        .flat()
        .forEach(name => {

            if (
                name
                    .toLowerCase()
                    .includes(query)
            ) {

                results.push({

                    id: `search-${name}`,
                    name: name,
                    type: "no-price"

                });

            }

        });


    /* المواد الغذائية */

    foodProducts.forEach(name => {

        if (
            name
                .toLowerCase()
                .includes(query)
        ) {

            results.push({

                id: `food-search-${name}`,
                name: name,
                type: "no-price"

            });

        }

    });


    renderSearchResults(results);

}


function renderSearchResults(results) {

    const content =
        document.getElementById("content");


    const title =
        document.getElementById("category-title");


    const backButton =
        document.getElementById("back-home");


    title.textContent = "🔎 نتائج البحث";

    backButton.hidden = false;


    if (results.length === 0) {

        content.innerHTML = `
            <div class="empty-result">
                لم يتم العثور على المنتج.
            </div>
        `;

        return;
    }


    let html =
        `<div class="product-list">`;


    results.forEach((product, index) => {

        if (product.type === "priced") {

            html += `

                <div class="product">

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <div class="product-price">
                        ${formatPrice(product.price)} د.ع / كغم
                    </div>

                    <div class="quantity-control">

                        <button
                            type="button"
                            onclick="searchQuantityChange(${index}, -1)">
                            −
                        </button>

                        <span id="search-quantity-${index}">
                            1
                        </span>

                        <button
                            type="button"
                            onclick="searchQuantityChange(${index}, 1)">
                            +
                        </button>

                    </div>

                    <button
                        type="button"
                        class="add-button"
                        onclick="addSearchPricedProduct(${index})">

                        🛒 أضف إلى السلة

                    </button>

                </div>

            `;

        } else {

            html += `

                <div class="product">

                    <h3>
                        ${escapeHTML(product.name)}
                    </h3>

                    <div class="no-price-note">
                        السعر حسب سعر اليوم
                    </div>

                    <div class="weight-controls">

                        <input
                            type="number"
                            id="search-weight-${index}"
                            min="0.1"
                            step="0.1"
                            value="1"
                            inputmode="decimal">

                        <select
                            id="search-unit-${index}">

                            <option value="كغم">
                                كغم
                            </option>

                            <option value="غرام">
                                غرام
                            </option>

                            <option value="حبة">
                                حبة
                            </option>

                            <option value="ربطة">
                                ربطة
                            </option>

                            <option value="علبة">
                                علبة
                            </option>

                        </select>

                    </div>

                    <button
                        type="button"
                        class="add-button"
                        onclick="addSearchWeightProduct(${index})">

                        🛒 إضافة إلى الطلب

                    </button>

                </div>

            `;

        }

    });


    html += `</div>`;


    content.innerHTML = html;


    window.currentSearchResults = results;

}


function searchQuantityChange(index, amount) {

    const element =
        document.getElementById(
            `search-quantity-${index}`
        );


    if (!element) {
        return;
    }


    let quantity =
        parseInt(element.textContent, 10);


    if (isNaN(quantity)) {
        quantity = 1;
    }


    quantity += amount;


    if (quantity < 1) {
        quantity = 1;
    }


    element.textContent = quantity;

}


function addSearchPricedProduct(index) {

    const results =
        window.currentSearchResults || [];


    const product =
        results[index];


    if (!product) {
        return;
    }


    const quantityElement =
        document.getElementById(
            `search-quantity-${index}`
        );


    let quantity =
        parseInt(quantityElement.textContent, 10);


    if (!quantity || quantity < 1) {
        quantity = 1;
    }


    const existing =
        cart.find(
            item =>
                item.id === product.id &&
                item.type === "priced"
        );


    if (existing) {

        existing.quantity += quantity;

    } else {

        cart.push({

            id: product.id,
            name: product.name,
            price: product.price,
            quantity: quantity,
            unit: "كغم",
            type: "priced"

        });

    }


    updateCart();

    showToast("تمت إضافة المنتج إلى السلة");

}


function addSearchWeightProduct(index) {

    const results =
        window.currentSearchResults || [];


    const product =
        results[index];


    if (!product) {
        return;
    }


    const quantityElement =
        document.getElementById(
            `search-weight-${index}`
        );


    const unitElement =
        document.getElementById(
            `search-unit-${index}`
        );


    const quantity =
        parseFloat(quantityElement.value);


    const unit =
        unitElement.value;


    if (!quantity || quantity <= 0) {

        showToast("أدخل كمية صحيحة");

        return;
    }


    cart.push({

        id: `search-${Date.now()}-${index}`,
        name: product.name,
        quantity: quantity,
        unit: unit,
        type: "no-price",
        price: null

    });


    updateCart();

    showToast("تمت إضافة المنتج إلى الطلب");

}


/* =========================
   الإشعار
   ========================= */

let toastTimer = null;


function showToast(message) {

    const toast =
        document.getElementById("toast");


    toast.textContent = message;

    toast.classList.add("show");


    clearTimeout(toastTimer);


    toastTimer =
        setTimeout(
            () => {
                toast.classList.remove("show");
            },
            2200
        );

}


/* =========================
   أدوات مساعدة
   ========================= */

function formatPrice(number) {

    return Number(number || 0)
        .toLocaleString("en-US");

}


function formatNumber(number) {

    return Number(number || 0)
        .toLocaleString("en-US");

}


function formatQuantity(number) {

    if (Number.isInteger(number)) {
        return number.toString();
    }

    return Number(number)
        .toFixed(2)
        .replace(/\.?0+$/, "");

}


function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function escapeAttribute(value) {

    return String(value)
        .replace(/\\/g, "\\\\")
        .replace(/'/g, "\\'");
}


/* =========================
   تشغيل أولي
   ========================= */

updateCart();
