const express = require('express');
const { route } = require('express/lib/application')
const routes = express.Router()

//models
const Detail = require("../models/detail")
const Slider = require("../models/slider")
const serviceIcon = require("../models/serviceIcon")
const quries = require("../models/contactdata")

routes.get("/",async(req,res)=>{
    const details = await Detail.findOne({"_id":"65203f135ca28360cc26d0a8"})
    const slider = await Slider.find()
    const serviceIcons = await serviceIcon.find()

    res.render("index",{
        details:details,
        slider:slider,
        service:serviceIcons
    })
})

routes.get("/gallery",async(req,res)=>{
    const details = await Detail.findOne({"_id":"65203f135ca28360cc26d0a8"})
    res.render("gallery",{
        details:details
    })
})

routes.post("/ramisagoodboy",async(req,res)=>{
    console.log("form is submitted")
    console.log(req.body)
// save the data to database
    try{
        const data=await quries.create(req.body)
        console.log(data)
        res.redirect("/")
    }
    catch(e){
        res.redirect("/")
    }
})
module.exports = routes