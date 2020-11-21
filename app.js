const express = require("express");
const app = express();

const pathPages = `${__dirname}/views`;

app.use(express.static('public'));

app.get("/", (req, res, next) => res.sendFile(`${pathPages}/index.html`));
app.get("/about", (req, res, next) => res.sendFile(`${pathPages}/about.html`));
app.get("/works", (req, res, next) => res.sendFile(`${pathPages}/works.html`));
app.get("/gallery", (req, res, next) => res.sendFile(`${pathPages}/gallery.html`));

app.listen(3000);