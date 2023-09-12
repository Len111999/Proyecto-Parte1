const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://GabrielPoma:0123456789@nex.punsd4y.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log("MongoDB conectado exitosamente");
}).catch(err => {
  console.error("Error de conexión a MongoDB:", err);
});


const newSchema=new mongoose.Schema({
    name:{
      type:String,
      required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection
