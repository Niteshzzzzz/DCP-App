import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import userRoute from "./routes/userRoute.js";
import courseRoute from './routes/courseRoute.js'

dotenv.config({});

// call database connection here
connectDB();
const app = express();

const PORT = process.env.PORT || 3000;

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
 
// apis
app.use("/api/v1/user", userRoute);
app.use("/api/v1/course", courseRoute);

 
app.listen(PORT, () => {
    console.log(`Server listen at port ${PORT}`);
})


