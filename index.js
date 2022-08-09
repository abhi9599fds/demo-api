import express from "express";
import cors from "cors";
import compression from "compression";
import { router } from "./controllers/productController.js"
import { sequelizeConnetion } from "./connection/dbConnection.js"
import { createServer } from "http"



const app = express();
const PORT = 9001;

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({extended : false}));

sequelizeConnetion.sync({
    alter :true,
    
}).then(() => { 
    console.log("DatabaseCreated"); 
});

app.use(cors());

app.get("/",(req,res) =>{
    res.status(200).json({
        "msg" : "started"
    });
});

app.use("/api" ,router);

createServer(app).listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
