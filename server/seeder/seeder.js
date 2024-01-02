import mongoose from "mongoose";
import products from "../seeder/data.js";
import Product from "../models/product.js";

const seedProducts = async (req, res) => {
    try{
        await mongoose.connect("mongodb://localhost:27017/shopit-v1");
        
        await Product.deleteMany();
        console.log("Products are deleted");

        await Product.insertMany(products);
        console.log("Products are added");

        process.exit();

    } catch(e) {
        console.log(e.message);
        process.exit();
    }
};

seedProducts();