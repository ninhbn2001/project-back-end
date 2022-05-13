import { CardModel } from "*/models/card.model"
import { ColumnModel } from "*/models/column.model"
import { ObjectId } from "mongodb";

const createNew = async (data) => {
    try {
        const createdCard = await CardModel.createNew(data)
        const getNewCard = await CardModel.findOneById(createdCard.insertedId.toString())
        await ColumnModel.pushCardOrder(getNewCard.columnId.toString(), getNewCard._id.toString())

        return getNewCard;
    } catch (error) {
        throw new Error(error)
    }
}

const createDetailCard = async (data) => {
    try {
        const updateData = {
            ...data,
            updateAt: Date.now()
        }
        let id = data.cardId;
        if (updateData.cardId) delete updateData.cardId
        updateData.userId = ObjectId(updateData.userId)

        const updatedCard = await CardModel.update(id, updateData)

        return { errCode: 0 };
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
        if (updateData._id) delete updateData._id


        const updatedCard = await CardModel.update(id, updateData)

        return updatedCard;
    } catch (error) {
        throw new Error(error)
    }
}

const getCardDetail = async (id) => {
    try {
        const card = await CardModel.getCardDetail(id)
        return card;
    } catch (error) {
        throw new Error(error)
    }
}

const deleteCard = async (id) => {
    try {
        const deleteCard = await CardModel.deleteCard(id)

        return deleteCard;
    } catch (error) {
        throw new Error(error)
    }
}

export const CardService = { createNew, update, createDetailCard, getCardDetail, deleteCard}