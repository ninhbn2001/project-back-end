import express from "express";
import { CardController } from '*/controllers/card.controller';
import {CardValidation} from '*/validations/card.validation'


const router = express.Router()

router.route('/')
.post(CardValidation.createNew, CardController.createNew) 
.get(CardController.getCardDetail)

router.route('/details')
.put(CardValidation.createDetailCard, CardController.createDetailCard) 

router.route('/:id')
.put(CardValidation.update, CardController.update) 
.delete( CardController.deleteCard) 

export const cardRoutes = router