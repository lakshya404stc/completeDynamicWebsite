const express = require("express");
const mongoose = require("mongoose");
const hbs = require("hbs");
const Detail = require("./models/detail");
const slider = require("./models/slider")
const serviceIcon = require("./models/serviceIcon")
const app = express();

//static function(to set public folder as the static folder)
app.use('/static',express.static("public"));

//bodyparser to decode the user data
// const bodyParser= require("body-parser")
app.use(express.urlencoded({
  extended:true
}))

//routes enable
const routes = require('./routes/main');
app.use('',routes);


//template engine
app.set("view engine",'hbs');
app.set('views','views');

//db connection
mongoose.connect("mongodb://127.0.0.1:27017/website")
  .then(() => {
    console.log("Connected to database");
  })

//adding data to database

// serviceIcon.create([
//   {
//     iconUrl: "fa-solid fa-hands-asl-interpreting",
//     service: "service 1",
//     discription: "this is service 1",
//     linkText:"support 1",
//     linkUrl:"/!"
//   },
//   {
//     iconUrl: "fa-solid fa-hands-asl-interpreting",
//     service: "service 2",
//     discription: "this is service 2",
//     linkText:"support 2",
//     linkUrl:"/!"
//   },
//   {
//     iconUrl: "fa-solid fa-hands-asl-interpreting",
//     service: "service 3",
//     discription: "this is service 3",
//     linkText:"support 3",
//     linkUrl:"/!"
//   }
// ])

// slider.create([{
//   imgUrl:"/static/images/img.jpg",
//   heading:"car",
//   discription:"this is a image of car",
// },
// {
//   imgUrl:"/static/images/img2.jpg",
//   heading:"fox",
//   discription:"this is a image of fox",
// }])

// Detail.create({
//     companyName:"this is my company",
//     companyLogoUrl:"https://yt3.ggpht.com/h5GQrHvmmOeneN9Wa7RlEBz8ADQwhQu7TsOX1NNRiFgfrVmAwYWxu5kCrdWowJV5sHd5SpizPf4=s88-c-k-c0x00ffffff-no-rj",
//     links:[
//         {label:"home",
//         url:"/"},
//         {label:"services",
//         url:"/#services"},
//         {label:"Gallery",
//         url:"/gallery"},
//         {label:"About",
//         url:"/#about"},
//         {label:"Contact",
//         url:"/#contact"},
//     ],
// })

//register partials
hbs.registerPartials("views/partials")

//server listen
app.listen(process.env.PORT || 270, ()=>{
    console.log("listening at port 270");
});