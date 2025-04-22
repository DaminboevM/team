import fs from "fs"
import path from "path"

const users = fs.readFileSync(path.join(process.cwd(), "database/users.json"))
const history = fs.readFileSync(path.join(process.cwd(), "database/history.json"))


// Muhammadrizo
const POST = (req, res) => {
    try {        
        if(!req.body)throw Error("body not found")
        const {fromUserId, toUserId, amount} = req.body

        const user = users.find(user => user.userId == fromUserId)
        const toUser = users.find(el => el.transactionId == toUserId)

        if(!user || !toUser) throw Error("user not found")
        if(user.balance < amount) throw Error("balanse not enough")

        user.balance -= amount
        toUser.balance += amount

        const date = new Date()
        const newHistory = {
            transactionId: history.length ? history.at(-1).transactionId + 1 : 1,
            fromUserId,
            toUserId,
            amount,
            date: date.toLocaleDateString('en-GB',{year:'numeric',month:'short',day:"2-digit",hour:'2-digit',minute:'2-digit',second:'2-digit'})
        }

        history.push(newHistory)
        fs.writeFileSync(path.join(process.cwd(), "database/history.json"), JSON.stringify(history, null, 2))

        res.status(200).send({
            status: 200,
            message: "succsess",
        })

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