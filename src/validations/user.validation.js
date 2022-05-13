import Joi from "joi"
import {HttpStatusCode} from "*/utilities/constants";

const createNew = async (req, res, next) => {
    const condition = Joi.object ({
        // userName: Joi.string().required(),
        name: Joi.string().required(),
        phonenumber: Joi.string().required(),
        password: Joi.string().required(),
        email: Joi.string().required(),
        role: Joi.string().required(),

    })
    try {
        await condition.validateAsync(req.body, { abortEarly: false })
        next()
    } catch (error) {
        // res.status(HttpStatusCode.BAD_REQUEST).json({ 
        //     errors: new Error(error).message \
        res.status(404).json({ errors: error  });
        
    }
}



const update = async (req, res, next) => {
    const condition = Joi.object ({
        title: Joi.string().min(3).max(20).trim(),
        columnOrder: Joi.array().items(Joi.string())
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

export const UserValidation = { createNew, update }
