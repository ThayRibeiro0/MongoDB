//Conexão banco Atlas
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://138.255.111.58:<usbW2391>@cluster0.6p9tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

//Conexão Banco Terminal
const mongoose = require("mongoose")
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://138.255.111.58", {useMongoClient: true
}).then(() => {console.log("MongoDB Conectado...")}).catch((err) => {console.log("Houve um erro ao se conectar ao mongoDB: "+err)
})

// Model - Usuários

const UserSchema = mongoose.Schema({

    nome: {
        type: String,
        require: true
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
        type: Number,
    }
})

//Collection
    mongoose.model('usuarios', UserSchema)

    new UserSchema({
        nome: "Victor",
        sobrenome: "Lima",
        email: "email@email.com",
        idade: 19,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Usuário criado com sucesso!")
    }).catch((err) => {
        console.log("Houve um erro ao registrar o usuário: "+err)
    }) 
