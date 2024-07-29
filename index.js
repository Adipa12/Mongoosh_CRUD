const express = require("express");
const connection = require("./config/db")
const userRouter = require("./routes/user.route");
const productRouter = require("./routes/product.route");

const server = express();
const PORT = 3031

server.use(express.json())
server.use("/user", userRouter)
server.use("/product", productRouter)

server.listen(PORT, async ()=>{
try{
    await connection();
    console.log(`use port no ${PORT}`);
}
catch(error){
    console.log(error.message);
}
    
});

