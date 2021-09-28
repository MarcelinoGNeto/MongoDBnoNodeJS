const mongoose = require("mongoose")

//Configurações para o mongoDB
    console.log("MongoDB Conectado...")
mongoose.connect("mongodb://localhost/aprendendo", {
    useNewUrlParser: true
}).then(() => {
// (function(){}) -> subistituído pelo arrow function: (() => {}) 
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: " + err)
})