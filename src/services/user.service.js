import { UserModel } from "*/models/user.model"
// import { cloneDeep } from "lodash";

const createNew = async (data) => {
    try {
        const createdUser = await UserModel.createNew(data)
        const getNewUser = await UserModel.findOneById(createdUser.insertedId.toString())
        return getNewUser;
    } catch (error) {
        throw new Error(error)
    }
}

const getAllUser = async (data) => {
    try {
        const board = await UserModel.getAllUser()
        return board;
    } catch (error) {
        throw new Error(error)
    }
}

// const update = async (id, data) => {
//     try {
//         const updateData = {
//             ...data,
//             updateAt: Date.now()
//         }
//         if (updateData._id) delete updateData._id
//         if (updateData.columns) delete updateData.columns

//         const updatedBoard = await BoardModel.update(id, updateData)

//         return updatedBoard;
//     } catch (error) {
//         throw new Error(error)
//     }
// }

const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        const updatedCard = await UserModel.update(id, updateData)
        return updatedCard;
    } catch (error) {
        throw new Error(error)
    }
}


const deleteUser = async (id) => {
    try {
        const deleteMile = await UserModel.deleteUser(id)

        return deleteMile;
    } catch (error) {
        throw new Error(error)
    }
}

const getUserDetail = async (id) => {
    try {
        const card = await UserModel.getUserDetail(id)
        return card;
    } catch (error) {
        throw new Error(error)
    }
}

export const UserService = {  createNew, getAllUser, update, getUserDetail, deleteUser }