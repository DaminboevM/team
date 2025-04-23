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
const GET_U = (req,res) => {
    try {
        
    const userId = req.params.userId
  
    const usersPath = path.join(process.cwd(), "database/users.json")
    
    const users = JSON.parse(fs.readFileSync(usersPath, 'utf-8'))
  
    const user = users.find(u => u.userId === userId)
  
    if (!user) {
      return res.status(404).json({status: 'failed',message: 'foydalanuvchi yoq'})
    }
  
    res.status(200).json({
      userId: user.userId,
      balance: user.balance,
      monthlyLimit: user.monthlyLimit,
      usedLimit: user.usedLimit
    })
        
    } catch (error) {
        res.message = 'hato'
    }
  }


// Abrorbek
const GET_H = (req, res) => {}



// Abdulloh
const PUT = (req, res) => {
    const usersPath = path.join(process.cwd(), "database/users.json");

    const { userId } = req.params;
    const { newLimit } = req.body;
    
    if (!newLimit || typeof newLimit !== "number") {
      return res.status(400).json({
        status: "failed",
        message: "Invalid limit value."
      });
    }
    
    const users = JSON.parse(fs.readFileSync(usersPath, "utf-8"));
    const userIdNum = parseInt(userId);
    
    const user = users.find(u => u.userId === userIdNum);
    
    if (!user) {
      return res.status(404).json({
        status: "failed",
        message: "User not found."
      });
    }
    
    user.monthlyLimit = newLimit;
    
    fs.writeFileSync(usersPath, JSON.stringify(users, null, 2));
    
    res.status(200).json({
      userId: user.userId,
      newLimit: newLimit,
      message: "Monthly limit updated successfully."
    });

}


export default {
    POST,
    GET_U,
    GET_H,
    PUT
}