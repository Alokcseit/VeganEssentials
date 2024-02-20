const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/api",
    createProxyMiddleware({
      target: "https://veganessentials.onrender.com",
      changeOrigin: true,
    })
  );
};
