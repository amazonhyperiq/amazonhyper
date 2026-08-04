function showCategory(category){

    let content = document.getElementById("content");

    if(category=="meat"){

        content.innerHTML=`
        <h2>🥩 قسم اللحوم</h2>

        <p>سيتم إضافة منتجات اللحوم هنا.</p>
        `;

    }

    else if(category=="chicken"){

        content.innerHTML=`
        <h2>🐔 قسم الدجاج</h2>

        <p>سيتم إضافة منتجات الدجاج هنا.</p>
        `;

    }

    else{

        content.innerHTML=`
        <h2>🚧</h2>

        <p>هذا القسم سيتم إضافته قريباً.</p>
        `;

    }

}
