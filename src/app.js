import express from "express"
import Users from "./router/users.js"
const PORT = 5500

const app = express()
app.use(Users)
app.use(express.json())

app.listen(PORT, () => console.log("Servre is runing..."))