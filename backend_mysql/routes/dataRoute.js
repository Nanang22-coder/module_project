import Express  from "express";
import {
    getDatas, 
    getDataById, 
    createData,
    updateData,
    deleteData

} from "../controllers/DataController.js"

const router = Express.Router()
router.get('tableName', getDatas)
router.get('tableName/:id', getDatasById)
router.post('tableName', createData)
router.patch('tableName/:id', updateData)
router.delete('tableName/:id', deleteData)
export default router
