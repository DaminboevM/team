import fs from "fs"
import path from "path"

const users = fs.readFileSync(path.join(process.cwd(), "database/users.json"))
const history = fs.readFileSync(path.join(process.cwd(), "database/history.json"))


// Muhammadrizo
const POST = (req, res) => {
    try {        
        if(!req.body)throw Error("body bosh")
        const {fromUserId, toUserId, amount} = req.body
        console.log(fromUserId, toUserId, amount)
    } catch (error) {
        res.send(error.message)
    }
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