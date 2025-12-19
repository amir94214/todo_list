



function getRealWeather(city) {
    // 🔑 API Key خودت رو اینجا قرار بده
    const apiKey = 'e7b810c819510543dbc2c779549c3e7c';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fa`;

    console.log(`🌤️ در حال دریافت آب و هوای ${city}...`);

    return new Promise((resolve, reject) => {
        fetch(url)
        .then(response => {
            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('API Key معتبر نیست');
                }
                if (response.status === 404) {
                    throw new Error('شهر پیدا نشد');
                }
                throw new Error('مشکل در ارتباط با سرور');
            }
            return response.json();
        })
        .then(realData => {
            // پردازش داده واقعی
            const weatherInfo = {
                city: realData.name,
                temperature: Math.round(realData.main.temp),
                description: realData.weather[0].description,
                humidity: realData.main.humidity,
                windSpeed: realData.wind.speed,
                country: realData.sys.country
            };
            resolve(weatherInfo);
        })
        .catch(error => {
            reject(`❌ ${error.message}`);
        });
    });
}




// تست کنیم:
getRealWeather(' madrid')
.then(weather => {
    console.log('✅ داده واقعی دریافت شد!');
    console.log('📍 شهر:',
        weather.city);
    console.log('🌡️ دما:',
        weather.temperature + '°C');
    console.log('📝 وضعیت:',
        weather.description);
    console.log('💧 رطوبت:',
        weather.humidity + '%');
    console.log('🌬️ سرعت باد:',
        weather.windSpeed + ' m/s');
    console.log(' کشور :',
        weather.country);
})
.catch(error => {
    console.log('خطا:',
        error);
});



// تست خطاها:
getRealWeather('InvalidCityName123')
.then(weather => console.log(weather))
.catch(error => console.log(error));
// "شهر پیدا نشد"

getRealWeather('London')
.then(weather => console.log(weather))
.catch(error => console.log(error));
// داده واقعی لندن