const Sitemap = require("react-router-sitemap").default;
const routes = require("./routes"); 

const sitemap = new Sitemap({
  hostname: "http://localhost:3000/", 
  routes,
});

sitemap.toFile("./public/sitemap.xml");
