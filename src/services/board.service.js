import { BoardModel } from "*/models/board.model"
import { cloneDeep } from "lodash";
import { getDB } from "*/config/mongodb";

const createNew = async (data) => {
    try {
        const createdBoard = await BoardModel.createNew(data)
        const getNewBoard = await BoardModel.findOneById(createdBoard.insertedId.toString())
        return getNewBoard;
    } catch (error) {
        throw new Error(error)
    }
}

const getFullBoard = async (boardId) => {
    try {
        const board = await BoardModel.getFullBoard(boardId)

        if (!board || !board.columns) {
            throw new Error('Board not found!')
        }

        const transformBoard = cloneDeep(board)
        // filter deleted columns
        transformBoard.columns = transformBoard.columns.filter(column => !column._destroy)

        transformBoard.columns.forEach(column => {
            column.cards = transformBoard.cards.filter(c => c.columnId.toString() === column._id.toString())
        })

        //sort column by mapOder (This step will do in fornt end)
        delete transformBoard.cards
        return transformBoard;
    } catch (error) {
        console.log(error.message)
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
        if (updateData.columns) delete updateData.columns

        const updatedBoard = await BoardModel.update(id, updateData)

        return updatedBoard;
    } catch (error) {
        throw new Error(error)
    }
}

const getAllBoard = async (data) => {
    try {
        const board = await BoardModel.getAllBoard()
        return board;
    } catch (error) {
        throw new Error(error)
    }
}
 
const getAllColumnFromBoard =  async (boardId) => {
    try {
        const board = await BoardModel.getAllColumnFromBoard(boardId)
        return board;
    } catch (error) {
        throw new Error(error)
    }
}



const getAllmileFromBoard =  async (boardId) => {
    try {
        const board = await BoardModel.getAllmileFromBoard(boardId)
        return board;
    } catch (error) {
        throw new Error(error)
    }
}


const deleteBoard = async (id) => {
    try {
        const deleteMile = await BoardModel.deleteBoard(id)

        return deleteMile;
    } catch (error) {
        throw new Error(error)
    }
}
export const BoardService = { createNew, getFullBoard, update, getAllBoard, getAllColumnFromBoard, getAllmileFromBoard, deleteBoard }