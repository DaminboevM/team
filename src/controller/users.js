import fs from "fs"
import path from "path"

const users = fs.readFileSync(path.join(process.cwd(), "database/users.json"))
const history = fs.readFileSync(path.join(process.cwd(), "database/history.json"))


// Muhammadrizo
const POST = (req, res) => {}


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
const PUT = (req, res) => {}


export default {
    POST,
    GET_U,
    GET_H,
    PUT
}