function showCategory(category){

    let content = document.getElementById("content");

    if(category=="meat"){

        content.innerHTML=`

        <h2>🥩 قسم اللحوم</h2>

        <div class="product">
            <h3>لحم غنم بالعظم</h3>
            <p>22,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>لحم غنم شرح</h3>
            <p>27,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>ضلوع غنم</h3>
            <p>25,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>لية غنم</h3>
            <p>16,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>معلاك غنم</h3>
            <p>16,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>لحم مثروم غنم وعجل</h3>
            <p>19,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>لحم مثروم عجل</h3>
            <p>19,000 د.ع / كغم</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>بركر لحم عراقي</h3>
            <p>18,500 د.ع</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        <div class="product">
            <h3>باجة غنم</h3>
            <p>12,000 د.ع</p>
            <button>🛒 أضف إلى السلة</button>
        </div>

        `;

    }

    else if(category=="chicken"){

        content.innerHTML=`
        <h2>🐔 قسم الدجاج</h2>
        <p>سيتم إضافة منتجات الدجاج في الخطوة التالية.</p>
        `;

    }

    else{

        content.innerHTML=`
        <h2>🚧</h2>
        <p>هذا القسم سيتم إضافته قريباً.</p>
        `;

    }

}
