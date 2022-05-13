import express from "express";
import { MileController } from '*/controllers/mile.controller';
import {MileValidation} from '*/validations/mile.validation'

const router = express.Router()

router.route('/')
.post(MileValidation.createNew, MileController.createNew) 

router.route('/:id')
.put(MileValidation.update, MileController.update) 

router.route('/deleteMile/:id')
.delete( MileController.deleteMile) 


export const mileRoutes = router