import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "*/config/mongodb";


const mileCollectionName = 'miles'
const mileCollectionSchema = Joi.object ({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    title: Joi.string(),
    startDate: Joi.date().timestamp().default(null),
    endDate: Joi.date().timestamp().default(null),

})

const validateSchema = async (data) => {
    return await mileCollectionSchema.validateAsync(data, {abortEarly: false})
}

const findOneById = async (id) => {
    try {
        const result = await getDB().collection(mileCollectionName).findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const deleteMile = async (id) => {
    try {

        const result = await getDB().collection(mileCollectionName).deleteOne({ _id: ObjectId(id) })
        return result

    } catch (error) {
        throw new Error(error)
    }
}

const createNew = async (data) => {
    try {
        const validatedValue = await validateSchema(data)
        const insertValue = {
            ...validatedValue,
            boardId: ObjectId(validatedValue.boardId),
            columnId: ObjectId(validatedValue.columnId)
        }
        const result = await getDB().collection(mileCollectionName).insertOne(insertValue)
        return result

    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id, data) => {
    try {
        const updateData = {
            ...data
        }
        const result = await getDB().collection(mileCollectionName).findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' }
        )
        return result.value

    } catch (error) {
        throw new Error(error)
    }
}


export const MileModel = { mileCollectionName, createNew,   findOneById, update, deleteMile } 
