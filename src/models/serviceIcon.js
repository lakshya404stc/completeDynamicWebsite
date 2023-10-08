const mongoose = require("mongoose")

const serviceIcon = mongoose.Schema([
    { iconUrl: String,
      service: String,
      discription: String,
      linkText:String,
      linkUrl:String
    }
])

module.exports = mongoose.model("service",serviceIcon)