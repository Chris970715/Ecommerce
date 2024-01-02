import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
//Import all routes
import productRoute from './routes/products.js';
import { connectDatabase } from "./config/dbConnect.js";
//Error Handler
import errorMiddleware from "./middlewares/error.js";

// Handle Uncaught exceptions
process.on('uncaughtException', (err) => {
    console.log('ERROR:' + err);
    console.log('Shutting down due to uncaught expection');
    process.exit(1);
});


dotenv.config({ path: "server/config/config.env"});
// Connecting to database
connectDatabase();


const app = express();

app.use("/",bodyParser.json());
app.use("/api/v1", productRoute);
// Using error midddleware
app.use(errorMiddleware);


const server = app.listen(process.env.PORT, () => {
    console.log('Connected Port: ' + process.env.PORT + " in " + process.env.NODE_ENV + " MODE !");
});

//Handle Unhandled Promise rehections
process.on('unhandledRejection', (err) => {
    console.log('ERROR: ' + err );
    console.log('Shutting down server due to Unhandled Promise Rejection');
    server.close(() => {
        process.exit(1);
    });
});