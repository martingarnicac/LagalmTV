import mongoose from 'mongoose';

mongoose.connect("mongodb://localhost/lagalmTv", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log("Conectado a LagalmTV"))
    .catch(error => console.log(error))