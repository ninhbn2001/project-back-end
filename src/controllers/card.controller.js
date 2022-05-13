import { CardService } from '*/services/card.service'
import { HttpStatusCode } from "*/utilities/constants";

const createNew = async (req, res) => {
    try {
        const result = await CardService.createNew(req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const result = await CardService.update(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const createDetailCard = async (req, res) => {
    try {
        const result = await CardService.createDetailCard(req.body)
        res.status(HttpStatusCode.OK).json({
            errCode: 0,
            data: result
        })
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const getCardDetail = async (req, res) => {
    try {
        const result = await CardService.getCardDetail(req.query.id)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}


const  deleteCard = async (req, res) => {
    try {
        const { id } = req.params
        const result = await CardService. deleteCard(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
            errors: error.message
         })
    }
 }

export const CardController = { createNew, update, createDetailCard, getCardDetail, deleteCard }
