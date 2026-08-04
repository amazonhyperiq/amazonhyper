let cart = [];

function showCategory(category){

    let content = document.getElementById("content");

    if(category=="meat"){

        content.innerHTML=`

<h2>🥩 قسم اللحوم</h2>

<div class="product">
<h3>لحم غنم بالعظم</h3>
<p>22,000 د.ع / كغم</p>
<button onclick="addToCart('لحم غنم بالعظم',22000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>لحم غنم شرح</h3>
<p>27,000 د.ع / كغم</p>
<button onclick="addToCart('لحم غنم شرح',27000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>ضلوع غنم</h3>
<p>25,000 د.ع / كغم</p>
<button onclick="addToCart('ضلوع غنم',25000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>لية غنم</h3>
<p>16,000 د.ع / كغم</p>
<button onclick="addToCart('لية غنم',16000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>معلاك غنم</h3>
<p>16,000 د.ع / كغم</p>
<button onclick="addToCart('معلاك غنم',16000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>لحم مثروم غنم وعجل</h3>
<p>19,000 د.ع / كغم</p>
<button onclick="addToCart('لحم مثروم غنم وعجل',19000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>لحم مثروم عجل</h3>
<p>19,000 د.ع / كغم</p>
<button onclick="addToCart('لحم مثروم عجل',19000)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>بركر لحم عراقي</h3>
<p>18,500 د.ع</p>
<button onclick="addToCart('بركر لحم عراقي',18500)">🛒 أضف إلى السلة</button>
</div>

<div class="product">
<h3>باجة غنم</h3>
<p>12,000 د.ع</p>
<button onclick="addToCart('باجة غنم',12000)">🛒 أضف إلى السلة</button>
</div>

`;

    }

}
