const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            hostRewrite : true,
            on:{
                proxyReq:(proxyReq, req, res)=>{
                    console.log("ok");
                },
                proxyRes: (proxyRes, req, res)=>{
                    console.log('Response Status:', proxyRes.statusCode);
                    console.log('Response Headers:', proxyRes.headers);
                    if (proxyRes.statusCode === 302) {
                        // Handle redirection if needed
                        console.log('Redirecting to:', proxyRes.headers.location);
                    }
                },
            }


        })
    );
};