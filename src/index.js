    import express from "express";
    import cors from "cors";
    import dotenv from 'dotenv';

    import authRoutes from "./routes/authRoutes.js"; 
    import bookRoutes from "./routes/bookRoutes.js";
    
    import {connectDB} from "./lib/db.js";


    const app = express();
    const PORT = 3000;
    app.use(express.json()); // para req.body funcionar
    
    dotenv.config();
    app.use(express.json());
    app.use(cors());
    
    app.use("/api/auth", authRoutes);
    app.use("/api/books", bookRoutes);

    app.get("/", (req, res) => {
        res.send("Servidor está rodando");
    });

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
        connectDB();
    });