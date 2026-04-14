import express from 'express'
import cors from 'cors'
import { connectDB } from './config/db.js'
import userRouter from './routes/userRouter.js'
import aiRouter from "./routes/aiRouter.js"
import resumeRouter from "./routes/resumeRouter.js"
import cookieParser from "cookie-parser"
import path from "path"
import { fileURLToPath } from "url"
import dotenv from 'dotenv'
dotenv.config();

const app = express()
const PORT = process.env.PORT || 4000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

const corsOptions = {
  // Replace this with your actual frontend URL
  origin: 'http://localhost:5000', 
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
};

app.use(cors(corsOptions));

// Connect to MongoDB
connectDB()

// API Endpoints
app.use('/api/users', userRouter)
app.use("/api/ai", aiRouter)
app.use("/api/resume", resumeRouter)
app.use("/uploads", express.static(path.join(__dirname, "uploads")))

app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}`)
})
