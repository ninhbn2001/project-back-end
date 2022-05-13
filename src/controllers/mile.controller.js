import {MileService} from '*/services/mile.service'
import {HttpStatusCode} from "*/utilities/constants";

const createNew = async (req, res) => {
   try {
       const result = await MileService.createNew(req.body)
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


export const MileController = { createNew, update, deleteMile }
