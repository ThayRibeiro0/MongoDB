const mongoose = require("mongoose")
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://138.255.111.58:<usbW2391>@cluster0.6p9tk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
  });

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://138.255.111.58", {
    useMongoClient: true
}).then(() => {
    console.log("MongoDB Conectado...")
}).catch((err) => {
    console.log("Houve um erro ao se conectar ao mongoDB: "+err)
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
    }
})