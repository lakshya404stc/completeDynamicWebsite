const mongoose = require("mongoose")
const Detail = mongoose.Schema({
    companyName:String,
    companyLogoUrl:String,
    links:[
        {label:String,
        url:String},
    ],
})

module.exports = mongoose.model("detail",Detail)