import express from 'express'

export const router = express.Router()


router.post("/transactions", (req,res)=>{
    const {id, title, value, type} = req.body;

    const transaction = {
        id: id,
        title: title,
        value: value,
        type: type
    }

    


})

router.get("/transactions", (req,res)=>{

})