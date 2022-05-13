import { BoardService } from '*/services/board.service'
import { HttpStatusCode } from "*/utilities/constants";


const createNew = async (req, res) => {
    try {
        const result = await BoardService.createNew(req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const getAllColumnFromBoard = async (req, res) => {
    try {
        const { id } = req.params
        const result = await BoardService.getAllColumnFromBoard(id)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const getFullBoard = async (req, res) => {
    try {
        const { id } = req.params
        const result = await BoardService.getFullBoard(id)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const update = async (req, res) => {
    try {
        const { id } = req.params
        const result = await BoardService.update(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const getAllBoard = async (req, res) => {
    try {
        const result = await BoardService.getAllBoard()
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}


const getAllmileFromBoard = async (req, res) => {
    try {
        const { id } = req.params
        const result = await BoardService.getAllmileFromBoard(id)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const  deleteBoard = async (req, res) => {
    try {
        const { id } = req.params
        const result = await BoardService. deleteBoard(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
            errors: error.message
         })
    }
}

export const BoardController = { createNew, getFullBoard, update, getAllBoard, getAllColumnFromBoard, getAllmileFromBoard, deleteBoard}
