import { MileModel } from "*/models/mile.model"
import { BoardModel } from "*/models/board.model"
import { CardModel } from "*/models/card.model"

const createNew = async (data) => {
    try {
        const createdMile = await MileModel.createNew(data)
        const getNewMile = await MileModel.findOneById(createdMile.insertedId.toString())

        await BoardModel.pushColumnOrder(getNewMile.boardId.toString(), getNewMile._id.toString())
        return getNewMile;
    } catch (error) {
        throw new Error(error)
    }
}


const update = async (id, data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        const updatedMile = await MileModel.update(id, updateData)

        return updatedMile;
    } catch (error) {
        throw new Error(error)
    }
}



const deleteMile = async (id) => {
    try {
        const deleteMile = await MileModel.deleteMile(id)

        return deleteMile;
    } catch (error) {
        throw new Error(error)
    }
}

export const MileService = { createNew, update, deleteMile }