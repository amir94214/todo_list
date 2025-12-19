
"use srtict";




// require 
const http = require('http');

// createServer 
const server = http.createServer((request, response) => {

    // setHeader 
    response.setHeader('Content-Type', 'text/html; charset=utf-8');

    //  home 
    if (request.url === '/') {
        // response 
        response.end('<h1>خوش آمدید به اولین سرور من! 🎉</h1>');

    } else if (request.url === '/about') {
        // about 
        response.end('<h1>درباره ما</h1><p>این اولین سرور من در Node.js است</p>');

    } else {
        // error 404 
        response.end('<h1>صفحه پیدا نشد! 404</h1>');
    }
});

// port 3000 
const PORT = 3000;

// start server 
server.listen(PORT, () => {
    // message 
    console.log(`سرور اجرا شد: http://localhost:${PORT}`);
    console.log('برای توقف سرور: Ctrl + C');
});