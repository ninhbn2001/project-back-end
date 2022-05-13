import Joi from "joi";
import { ObjectId } from "mongodb";
import { getDB } from "*/config/mongodb";
import bcrypt from "bcrypt";


const userCollectionName = 'users'
const userCollectionSchema = Joi.object ({
    name: Joi.string().required(),
    phonenumber: Joi.string().required(),
    password: Joi.string().required(),
    email: Joi.string().required(),
    role: Joi.string().required(),
})

const validateSchema = async (data) => {
    return await userCollectionSchema.validateAsync(data, {abortEarly: false})
}


const findOneById = async (id) => {
    try {
        const result = await getDB().collection(userCollectionName).findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}


const createNew = async (data) => {
    try {
        const validatedValue = await validateSchema(data)
        const salt = await bcrypt.genSalt(10);
        const hashed = await bcrypt.hash(validatedValue.password, salt);
        const insertValue = {
            ...validatedValue,
            password: hashed
        }
        const result = await getDB().collection(userCollectionName).insertOne(insertValue)
        return result

    }   catch (error) { 
        throw new Error(error)
    }
}

const getAllUser = async () => {
    try {
        const result = await getDB().collection(userCollectionName).find({}).toArray();
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
        const result = await getDB().collection(userCollectionName).findOneAndUpdate(
            { _id: ObjectId(id) },
            { $set: updateData },
            { returnDocument: 'after' }
        )
        return result.value

    } catch (error) {
        throw new Error(error)
    }
}

const deleteUser = async (id) => {
    try {

        const result = await getDB().collection(userCollectionName).deleteOne({ _id: ObjectId(id) })
        return result

    } catch (error) {
        throw new Error(error)
    }
}

const getUserDetail = async (id) => {
    try {
        const result = await getDB().collection(userCollectionName).findOne({ _id: ObjectId(id) })
        return result
    } catch (error) {
        throw new Error(error)
    }
}


export const UserModel = {userCollectionSchema, userCollectionName, createNew, findOneById, getAllUser, update, deleteUser, getUserDetail } 
