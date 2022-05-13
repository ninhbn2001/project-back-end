import { ProjectModel } from "*/models/project.model"


const createNew = async (data) => {
    try {
        const createdMile = await ProjectModel.createNew(data)
        const getNewMile = await ProjectModel.findOneById(createdMile.insertedId.toString())
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

const getBoardByProject  = async (projectId) => {
    try {
        const board = await ProjectModel.getBoardByProject(projectId)
        return board;
    } catch (error) {
        throw new Error(error)
    }
}

const getAllProject = async (data) => {
    try {
        const board = await ProjectModel.getAllProject()
        return board;
    } catch (error) {
        throw new Error(error)
    }
}

const deleteProject = async (id) => {
    try {
        const deleteMile = await ProjectModel.deleteProject(id)

        return deleteMile;
    } catch (error) {
        throw new Error(error)
    }
}

export const ProjectService = { createNew, update, deleteMile, getBoardByProject, getAllProject, deleteProject }