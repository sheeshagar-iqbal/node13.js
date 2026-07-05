import express from 'express'
import Student from '../models/students.model.js'
const router =express.Router()

// all studentd
router.get('/', async (req,res)=>{
           try {
                const student = await Student.find()
                res.json(student)
           } catch (error) {
                res.status(500).json({message:error.message})
           }
})  

// single sutdent
router.get('/:id', async (req,res)=>{
           try {

               const student = await Student.findById(req.params.id)
               if(!student) return res.status(404).json({message:'student not found'})
                res.json(student)
           } catch (error) {
                res.status(500).json({message:error.message})
           }
}) 

// add new student
router.post('/', async (req,res)=>{
           try {
              const newstudent = await Student.create(req.body)
              res.status(201).json(newstudent)
           } catch (error) {
                res.status(400).json({message:error.message})
           }
}) 


// udeate student
router.put('/:id', async (req,res)=>{
           try {
             const updatestudent = await Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
               if(!updatestudent) return res.status(404).json({message:'student not found'})

              res.status(201).json(updatestudent)
           } catch (error) {
                res.status(400).json({message:error.message})
           }
}) 


// delte student
router.delete('/:id', async (req,res)=>{
           try {
              const deletestudent = await Student.findByIdAndDelete(req.params.id)
               if(!deletestudent) return res.status(404).json({message:'student not found'})

              res.status(201).json({message:"student delete"})
           } catch (error) {
                res.status(500).json({message:error.message})
           }
}) 

export default router