import { Router } from "express";

const router = Router();

router.get('/user',(req,res)=>{
    res.send("This is User Get");
});

export default router;