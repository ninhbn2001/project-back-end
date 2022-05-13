import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "*/config/mongodb";

const cardCollectionName = 'cards'
const cardCollectionSchema = Joi.object({
    boardId: Joi.string().required(),
    columnId: Joi.string().required(),
    userId: Joi.string(),
    mileId: Joi.string(),
    title: Joi.string().required().min(3).max(50).trim(),
    description: Joi.string(),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null),
    _destroy: Joi.boolean().default(false)
})

const validateSchema = async (data) => {
    return await cardCollectionSchema.validateAsync(data, { abortEarly: false })
}

const findOneById = async (id) => {
    try {
        const result = await getDB().collection(cardCollectionName).findOne({ _id: ObjectId(id) })
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
        const result = await getDB().collection(cardCollectionName).insertOne(insertValue)
        return result

    } catch (error) {
        throw new Error(error)
    }
}

const createDetailCard = async (data) => {
    try {
        const validatedValue = await validateSchema(data)
        const insertValue = {
            ...validatedValue,
            userId: ObjectId(validatedValue.userId),

        }

        const result = await getDB().collection(cardCollectionName).findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: insertValue },
            { returnDocument: 'after' }
        )
        return result.value
    } catch (error) {
        throw new Error(error)
    }
}
// ids array of cards id
const deleteMany = async (ids) => {
    try {
        const transformIds = ids.map(i => ObjectId(i))
        const result = await getDB().collection(cardCollectionName).updateMany(
            {
                _id: { $in: transformIds }
            },
            {
                $set: { _destroy: true }
            }
        )
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
        }
        if (data.boardId) {
            updateData.boardId = ObjectId(data.boardId)
        }
        if (data.columnId) {
            updateData.columnId = ObjectId(data.columnId)
        }
        const result = await getDB().collection(cardCollectionName).findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' }
        )
        return result.value

    } catch (error) {
        throw new Error(error)
    }
}


const getCardDetail = async (id) => {
    try {
        const result = await getDB().collection(cardCollectionName).findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCard = async (id) => {
    try {

        const result = await getDB().collection(cardCollectionName).deleteOne({ _id: ObjectId(id) })
        return result

    } catch (error) {
        throw new Error(error)
    }
}

export const CardModel = { cardCollectionName, createNew, deleteMany, update, findOneById, createDetailCard, getCardDetail, deleteCard } 