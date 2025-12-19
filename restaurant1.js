function restaurant(food) {
    return new Promise((resolve, reject) => {
        fetch('https://jsonplaceholder.typicode.com/posts/1') // یک API تستی
        .then(response => {
            // 🔹 باید response.json() رو return کنیم
            return response.json();
        })
        .then(data => {
            console.log("📊 داده دریافتی:", data);
            resolve("✅ سفارش موفق: " + food);
        })
        .catch(error => {
            console.log("❌ خطا:", error);
            reject("❌ سفارش ناموفق: " + food);
        })
        .finally(() => {
            console.log("🏁 پایان فرآیند سفارش");
        });
    });
}


// استفاده از تابع اصلاح شده
restaurant("پیتزا")
.then(result => {
    console.log("🎉 نتیجه:", result);
})
.catch(error => {
    console.log("💥 خطا:", error);
});