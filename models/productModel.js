import sequelize_dist from "sequelize";
import { sequelizeConnetion } from "../connection/dbConnection.js";


const { DataTypes ,UUID , UUIDV4 } = sequelize_dist


const ProductModel = sequelizeConnetion.define("product" , {
    id : { 
        primaryKey : true ,
        type: UUID, 
        defaultValue : UUIDV4
    },
    productName :{type : DataTypes.STRING , allowNull:false},
    productDescription : {type : DataTypes.STRING , allowNull:false},
    quantity : {type: DataTypes.INTEGER,allowNull:false},
    productPrice : {type : DataTypes.STRING , allowNull:false},
    productPicUrl : {type : DataTypes.STRING , allowNull:false},
    productCategory : {type : DataTypes.STRING , allowNull:false},
    productRating : {type : DataTypes.FLOAT , allowNull:false},
    currency : {type : DataTypes.STRING , allowNull:false}
},{
    createdAt :true,
    updatedAt :false
});

export{
    ProductModel
}


