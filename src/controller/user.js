

const userModel = require('../models/Users.js')

const getUsers = async (req,res)=>{
    try {
       let users = await userModel.find()
       res.status(200).send({
        message:"User Data Fetch Successfully",
        users
       })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
    
}

const getUserById= async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        res.status(200).send({
            message:"User Successfully Fetched",
            user
        })
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

let create = async (req,res)=>{
try {
    let user = await userModel.findOne({email:req.body.email})
    if(!user)
    {
        await userModel.create(req.body)
        res.status(201).send({
            message:"User Successfully Created"
        })
    }
    else{
        res.status(400).send({message:`User with ${req.body.email} already Exist`})
    }
} catch (error) {
    res.status(500).send({message:"Internal Server Error",error:error.message})
}
}

let editById = async (req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.body.id})
        if(user)
        {
            let {firstName,lastName,email,password,status,role} =  req.body
            user.firstName = firstName?firstName:user.firstName
            user.lastName = lastName?lastName:user.lastName
            user.email = email?email:user.email
            user.password = password?password:user.password
            user.status = status?status:user.status
            user.role = role?role:user.role

            await user.save()

            res.status(200).send({
                message:"User data saved"
            })

        }
        else{
            res.status(400).send({message:"Invalid User"})

        }
    } catch (error) {
        res.status(500).send({
            message:"Internal Server Error",
            error:error.message
        })
    }
}

let deleteById = async(req,res)=>{
    try {
        let user = await userModel.findOne({_id:req.params.id})
        if (user)
        {
            await user.userModel.deleteOne({_id:req.params.id})
            res.status(200).send({message:"User Successfully Deleted"})

        }
        else
        {
            res.status(400).send({message:"Invalid User"})
        }
    } catch (error) {
        res.status(500).send({message:"Internal Server Error",error:error.message})
    }
}

module.exports={
    getUsers,
    getUserById,
    create,
    editById,
    deleteById
}