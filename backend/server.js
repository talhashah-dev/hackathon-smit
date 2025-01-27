import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import connectDB from "./config/db.js"

dotenv.config();

connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

import userRoutes from "./routes/userRoutes.js"
import adminRoutes from "./routes/adminRoutes.js"
import loanRoutes from "./routes/loanRoutes.js"

app.use('/api/users', userRoutes);
app.use('/api/loans', loanRoutes);
app.use('/api/admin', adminRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
