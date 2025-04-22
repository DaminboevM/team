import { Router } from "express"
import Users from "../controller/users.js"

const router = Router()

router.get("/users/balance/:userId", Users.GET_U)
router.get("/transactions/history/:userId", Users.GET_H)
router.post("/transactions/transfer", Users.POST)
router.put("/users/limit/:userId", Users.PUT)

export default router