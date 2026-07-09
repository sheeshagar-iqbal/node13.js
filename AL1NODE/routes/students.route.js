import express from 'express'
import Student from '../models/students.model.js'
const router =express.Router()
import multer from 'multer';
import path from 'path';
import fs from 'fs'

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './upload')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + path.extname(file.originalname)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const filefilter =(req,file,cb)=>{
     if(file.mimetype.startsWith("image/")){
          cb(null,true)
     }else{
          cb(new Error ('only image are allowed',false))
     }
}
const upload = multer({
     storage:storage,
     fileFilter:filefilter,
     limits: {
          fileSize:1024*1024*3
     }
})

// all studentd
router.get('/', async (req,res)=>{
           try {
               const search = req.query.search?.trim() || ''
               const page = parseInt(req.query.page) || 1
               const limit = parseInt(req.query.limit) || 4
               const skip = (page -1) *5


               const query={
                    $or:[
                         {first_name:{$regex:search, $options:'i'}},
                         {last_name:{$regex:search, $options:'i'}}
                    ]
               }

               const total =await Student.countDocuments(query)


                const student = await Student.find(query).skip(skip).limit(limit)
                res.json({
                    total,
                    page,
                    limit,
                    totalPage :Math.ceil(total/limit),
                    student})
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
router.post('/',upload.single('profile_pic'), async (req,res)=>{
           try {
          //     const newstudent = await Student.create(req.body)
          const student =new Student(req.body)
          if(req.file){
               student.profile_pic=req.file.filename
          }
          const newstudent = await student.save()
              res.status(201).json(newstudent)
           } catch (error) {
                res.status(400).json({message:error.message})
           }
}) 


// udeate student
router.put('/:id',upload.single('profile_pic'), async (req,res)=>{
           try {
                    const existstudents = await Student.findById(req.params.id)
                    if(!existstudents){
                         if(req.file.filename){
                               const filepath = path.join('./upload',req.file.filename)
                         fs.unlink(filepath,(err)=>{
                                   if(err) console.log('failed to delete',err.message);
                              })

                         }
                          return res.status(404).json({message:'student not found'})
                    }


                    if(req.file){
                         if (existstudents.profile_pic){
                         const filepath = path.join('./upload',existstudents.profile_pic)
                         fs.unlink(filepath,(err)=>{
                                   if(err) console.log('failed to delete',err.message);
                              })
                    }
                    req.body.profile_pic =req.file.filename
                    }


             const updatestudent = await Student.findByIdAndUpdate(req.params.id,req.body,{returnDocument: "after"})
               if(!updatestudent) return res.status(404).json({message:'student not found'})

              res.status(201).json(updatestudent)
           } catch (error) {
                res.status(500).json({message:error.message})
           }
}) 


// delte student
router.delete('/:id', async (req,res)=>{
           try {
              const deletestudent = await Student.findByIdAndDelete(req.params.id)
             
               if(!deletestudent) return res.status(404).json({message:'student not found'})
                         if(deletestudent.profile_pic){
                              const filepath =path.join('./upload',deletestudent.profile_pic)
                              fs.unlink(filepath,(err)=>{
                                   if(err) console.log('failed to delete',err.message);
                                   

                              })
                         }
              res.status(201).json({message:"student delete"})
           } catch (error) {
                res.status(500).json({message:error.message})
           }
}) 

export default router