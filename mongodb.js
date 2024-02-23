const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://root:root@cluster0.yc3bjtw.mongodb.net/LoginDetails', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch(() => {
    console.log("Failed to Connect");
});

const logInSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = mongoose.model('collection1', logInSchema);

module.exports = collection;
