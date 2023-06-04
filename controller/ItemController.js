import { Router } from 'express'
const router = Router()
import { createItem, getAllList, getItemById, updateItem, deleteItem } from '../service/ItemService.js'
import isAuthenticate from '../service/TokenService.js'
import customerLogger  from '../utils/logger.js'

// (CREATE ITEM) Creating new item
router.post('/create', isAuthenticate, (req,res) => {
    createItem(req, req.body).then(result => {
        res.status(200).json({ success: true, message: "Item created successfully", data: result });
    }).catch(err =>{
        customerLogger.error(err)
        res.status(err.status||400).json(err)
    })

})

// (GET ALL Item) Fetching all item related information
router.post('/', isAuthenticate, (req,res) => {
    getAllList(req, req.body).then(result => {
        res.status(200).json({ success: true, message: "Item list fetched successfully", data: result });
    }).catch(err =>{
        customerLogger.error(err)
        res.status(err.status||400).json(err)
    })

})

// (GET SINGLE ITEM) Fetching single item related information by its id
router.get('/:id', isAuthenticate, (req,res) => {

    getItemById(req.params.id).then(result => {
        res.status(200).json({ success: true, message: "Item fetched successfully", data: result });
    }).catch(err =>{
        customerLogger.error(err)
        res.status(err.status||400).json(err)
    })

})

// (UPDATE PARTICULAR ITEM) Updating single item into database 
router.put('/:id', isAuthenticate, (req,res) => {

    updateItem(req, req.body).then(result => {
        res.status(200).json({ success: true, message: "Item updated successfully", data: result });
    }).catch(err =>{
        customerLogger.error(err)
        res.status(err.status||400).json(err)
    })

})

//(DELETE PARTICULAR ITEM) Delete a item from database
router.delete('/:id', isAuthenticate ,(req,res) => {

    deleteItem(req, req.params.id).then(result => {
        res.status(200).json({ success: true, message: "Item deleted successfully", data: result });
    }).catch(err =>{
        customerLogger.error(err)
        res.status(err.status||400).json(err)
    })

})

export default router