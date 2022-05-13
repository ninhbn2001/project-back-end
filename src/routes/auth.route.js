import express from "express";
import { AuthController } from '*/controllers/auth.controller';


const router = express.Router()

router.route('/:id')
.post(AuthController.login) 



export const authRoutes = router