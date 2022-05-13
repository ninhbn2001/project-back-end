import Joi from "joi"
import {HttpStatusCode} from "*/utilities/constants";

const createNew = async (req, res, next) => {
    const condition = Joi.object ({
        columnId: Joi.string().required(),
        boardId: Joi.string().required(),
        title: Joi.string().required().min(3).max(20).trim(),
        startDate: Joi.date().timestamp().default(null),
        endDate: Joi.date().timestamp().default(null),
    })
    try {
        await condition.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({ 
            errors: new Error(error).message 
        })
    }
}

const update = async (req, res, next) => {
    const condition = Joi.object ({
        title: Joi.string().min(3).max(20).trim(),
        startDate: Joi.date().timestamp().default(null),
        endDate: Joi.date().timestamp().default(null),
    })
    try {
        await condition.validateAsync(req.body, { abortEarly: false, allowUnknown: true })
        next()
    } catch (error) {
        res.status(HttpStatusCode.BAD_REQUEST).json({ 
            errors: new Error(error).message 
        })
    }
}


export const MileValidation = { createNew, update}

