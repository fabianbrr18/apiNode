import { Router } from "express";
import { createUser, showUser, showUserId, updateUser, deleteUser, loginUser } from "../controllers/user.controller.js";
import UserSchema from "../schemes/user.schema.js";
import userMiddlewares from "../middlewares/user.middlewares.js";
import userSchema from "../schemes/user.schema.js";

const router = Router();

router.post('/user', userMiddlewares(userSchema.createUser), createUser);
router.post('/user/login',loginUser);
router.get('/user',showUser);
router.get('/user/:id',showUserId);
router.put('/user/:id', userMiddlewares(UserSchema.updateUser), updateUser );
router.delete('/user/:id',deleteUser);

export default router;