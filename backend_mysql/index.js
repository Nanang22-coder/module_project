import express from "express";
import cors from "cors";
import UserRoute from "./routes/dataRoute.js"

const app = express();
app.use(cors());
app.use(express.json());
app.use(dataRoute)

app.listen(5000, () => console.log('server running port 50000'));