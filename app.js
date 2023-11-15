const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || 3000

let pathPublic = path.resolve("public")

console.log(pathPublic);

app.use(express.static(pathPublic))

app.listen(port,()=>{
    console.log("El servidor esta funcionando");
})

app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, "views/home.html"))
})

const pathRegister = path.resolve(__dirname, "views/register.html");
app.get("/register", (req, res) => {
    res.sendFile(pathRegister);
});

const pathLogin = path.resolve(__dirname, "views/login.html");
app.get("/login", (req, res) => {
    res.sendFile(pathLogin);
});
