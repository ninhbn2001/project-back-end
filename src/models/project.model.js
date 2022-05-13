import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "*/config/mongodb";
import { BoardModel } from "./board.model"

const projectCollectionName = 'projects'
const projectCollectionSchema = Joi.object ({
    title: Joi.string(),
    createdAt: Joi.date().timestamp().default(Date.now()),
    updatedAt: Joi.date().timestamp().default(null)
})

const validateSchema = async (data) => {
    return await projectCollectionSchema.validateAsync(data, {abortEarly: false})
}

const findOneById = async (id) => {
    try {
        const result = await getDB().collection(projectCollectionName).findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}


const createNew = async (data) => {
    try {
        const insertValue = await validateSchema(data)
        const result = await getDB().collection(projectCollectionName).insertOne(insertValue)
        return result

    } catch (error) {
        throw new Error(error)
    }
}

// const update = async (id, data) => {
//     try {
//         const updateData = {
//             ...data
//         }
//         const result = await getDB().collection(mileCollectionName).findOneAndUpdate(
//             { _id: ObjectId(id) },
//             { $set: updateData },
//             { returnDocument: 'after' }
//         )
//         return result.value

//     } catch (error) {
//         throw new Error(error)
//     }
// }

const getBoardByProject = async (projectId) => {
    try {
        const result = await getDB().collection(BoardModel.boardCollectionName).find({ projectId: ObjectId(projectId) }).toArray();
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const getAllProject = async () => {
    try {
        const result = await getDB().collection(projectCollectionName).find({}).toArray();
        return result
    } catch (error) {
        throw new Error(error)
    }
}

const deleteProject = async (id) => {
    try {
        const result = await getDB().collection(projectCollectionName).deleteOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}

export const ProjectModel = {  createNew, findOneById, getBoardByProject, getAllProject, deleteProject} 
