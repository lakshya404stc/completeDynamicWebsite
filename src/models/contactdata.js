const mongoose= require("mongoose")

const quries= mongoose.Schema({
    email:String,
    contact:String,
    quries: String,
})

module.exports = mongoose.model("quries",quries)