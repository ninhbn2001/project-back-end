import express from "express";
import {HttpStatusCode} from "*/utilities/constants";
import { boardRoutes } from "./board.route"
import { columnRoutes } from "./column.route"
import { cardRoutes } from "./card.route"
import { userRoutes } from "./user.route"
import { authRoutes } from "./auth.route"
import { mileRoutes } from "./mile.route"
import { projectRoutes } from "./project.route"

const router = express.Router()

router.get('/status', (req, res) => res.status(HttpStatusCode.OK).json({ status: 'OK!'}))

router.use('/boards', boardRoutes)

router.use('/columns', columnRoutes)

router.use('/cards', cardRoutes)

router.use('/users', userRoutes)

router.use('/login', authRoutes)

router.use('/miles', mileRoutes)

router.use('/projects', projectRoutes)

export const api = router