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

//MODEL - USUÁRIOS
    //definindo o model    
    const UsuarioSchema = mongoose.Schema({

        nome: {
            type: String,
            require: true //requerido, preenchimento obrigatório   
        },
        sobrenome: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        idade: {
            type: Number,
            require: true
        },
        pais: {
            type: String
        }    
    })

// Collection
    mongoose.model('usuarios', UsuarioSchema)

const Aline = mongoose.model('usuarios')

    new Aline({
        nome: "Aline",
        sobrenome: "Barbosa",
        email: "aline@gmail.com",
        idade: 21,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário" + err)
    })