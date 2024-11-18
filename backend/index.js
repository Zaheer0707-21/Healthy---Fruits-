const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/todo").then(()=>console.log(" checked"))
.catch(()=>console.log("fail to check"))

const fruit = mongoose.model("fruit",{name:String},"fruit")

app.get("/fruitlist", function (req,res) {
    fruit.find().then(function(retivedata){
        console.log(retivedata)
         res.send(retivedata)
    })
   
})

app.post("/addfruit", function (req, res) {
    var newfruit = req.body.newfruit
    const newFruit= new fruit(
        {
            name:newfruit
        }
    )
    newFruit.save().then(()=>console.log("checked")
    )
})

app.listen(7000, function () {
    console.log("running....!");

})
