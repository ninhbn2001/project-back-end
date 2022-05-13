import express from "express";
import { ProjectController } from '*/controllers/project.controller';
import {ProjectValidation} from '*/validations/project.validation'

const router = express.Router()

router.route('/')
.post(ProjectValidation.createNew, ProjectController.createNew) 

router.route('/:id')
.delete(ProjectController.deleteProject) 

router.route('/getBoard/:id')
.get(ProjectController.getBoardByProject)

router.route('/getallProject')
.get(ProjectController.getAllProject)


export const projectRoutes = router