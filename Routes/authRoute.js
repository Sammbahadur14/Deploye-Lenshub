import express from "express";
import {
    registerController, 
    loginController, 
    testController,
    forgotPasswordController,
    updateProfileController,
    getOrdersController,
    getAllOrdersController,
    orderStatusController,
    getUsersController
} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";


// router object
const router = express.Router()

//Routing
// Post : Register
router.post("/register", registerController)

// Login || Post
router.post("/login", loginController)

//Forget password || POST method
router.post("/forgot-password", forgotPasswordController)

// test routes
router.get('/test', requireSignIn, isAdmin, testController)

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true});
});

//protected Admin route
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ ok: true});
});

//update profile
router.put("/profile", requireSignIn, updateProfileController);

//orders
router.get("/orders", requireSignIn, getOrdersController);

//all orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

//Get All users
router.get("/allusers", requireSignIn, isAdmin, getUsersController);

export default router