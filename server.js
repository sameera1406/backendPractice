const app =require('./src/app');
const connectDB=require("./src/db/db")


connectDB();
app.listen(300,()=>{
    console.log("server is running on port 3000")
})

