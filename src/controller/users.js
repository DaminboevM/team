import fs from "fs"
import path from "path"

const users = fs.readFileSync(path.join(process.cwd(), "database/users.json"))
const history = fs.readFileSync(path.join(process.cwd(), "database/history.json"))


// Muhammadrizo
const POST = (req, res) => {
    res.send("salom")
}


// Ozodbek
const GET_U = (req, res) => {}


// Abrorbek
const GET_H = (req, res) => {}



// Abdulloh
const PUT = (req, res) => {}


export default {
    POST,
    GET_U,
    GET_H,
    PUT
}