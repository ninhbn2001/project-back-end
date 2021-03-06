import {ProjectService} from '*/services/project.service';
import {HttpStatusCode} from "*/utilities/constants";

const createNew = async (req, res) => {
   try {
       const result = await ProjectService.createNew(req.body)
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
        const result = await MileService.update(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
            errors: error.message
         })
    }
 }

 const  deleteMile = async (req, res) => {
    try {
        const { id } = req.params
        const result = await MileService. deleteMile(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
            errors: error.message
         })
    }
 }

 const getBoardByProject = async (req, res) => {
    try {
        const { id } = req.params
        const result = await ProjectService.getBoardByProject(id)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}
const getAllProject = async (req, res) => {
    try {
        const result = await ProjectService.getAllProject()
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({
            errors: error.message
        })
    }
}

const  deleteProject = async (req, res) => {
    try {
        const { id } = req.params
        const result = await ProjectService.deleteProject(id, req.body)
        res.status(HttpStatusCode.OK).json(result)
    } catch (error) {
        res.status(HttpStatusCode.INTERNAL_SERVER).json({ 
            errors: error.message
         })
    }
}
export const ProjectController = { createNew, update, deleteMile, getBoardByProject, getAllProject, deleteProject }
