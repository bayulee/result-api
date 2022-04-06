const express=require("express")
const dotenv = require("dotenv")
const results= require("./results")
dotenv.config()


const app=express();
//middlewares
app.use(express.json())
//route
//get all result
app.get("/results",(req, res)=>{
 res.json(results)

})
//post a result
app.post("/results", (req,res)=>{
    const students={
        name: req.body.name,
        class: req.body.class,
        marks: req.body.marks,
    }
    results.push(students);
    res.json(results)
})
//deleting a result
app.delete("/results/:name",(req ,res)=>{
    res.json(results.filter((result)=>result.name!==req.params.name))
})

const PORT = process.env.PORT||5000

app.listen(PORT, ()=>console.log(`server is running on port ${PORT}`))