const express = require("express")
const router = express.Router()

const authRoutes = require("./auth/authRoutes")
const userRoutes = require("./user/userRoutes")
const orderRoutes = require("./order/orderRoutes")
const orderItemRoutes = require("./orderItem/orderItemRoutes")

const {
    getTokenData,
    setUserQueryObject,
    handleUserData,
} = require("./order/orderMiddleware")

router.use("", authRoutes)
router.use("", userRoutes)

router.use(getTokenData)
router.use(handleUserData)
router.use(setUserQueryObject)

router.use("", orderItemRoutes)
router.use("", orderRoutes)

module.exports = router
