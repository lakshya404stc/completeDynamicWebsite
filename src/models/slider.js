const mongoose = require("mongoose")


const Sliders = mongoose.Schema([{
    imgUrl:String,
    heading:String,
    discription:String,
    status:String},
]
)

module.exports = mongoose.model("sliders",Sliders)