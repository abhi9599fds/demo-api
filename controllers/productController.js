import { Router } from "express";
import { ProductModel } from "../models/productModel.js";

const router = Router();

router.get("/insert" , async(req,res) => {

   const  data = await ProductModel.create({
    productName : "ToothBrush",
    productDescription : "ToothBrush Good Quality",
    quantity : 40,
    productPrice : 60,
    productPicUrl : "https://someimageg",
    productCategory : "Personal hygiene",
    productRating : 4.5,
    currency : "rupee"
   })

   return res.json(data)
})

export {
    router
}