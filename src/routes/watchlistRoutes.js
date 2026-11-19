import express from "express"

const router = express.Router()

router.post("/", addToWatchList)

export default router