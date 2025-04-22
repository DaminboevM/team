import express from "express"
import Users from "./router/users.js"
const PORT = 5500

const app = express()
app.use(express.json())
app.use(Users)

app.listen(PORT, () => console.log("Servre is runing..."))