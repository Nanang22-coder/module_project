import User from "../models/dataModel.js"

export const getDatas = async(req, res) => {
try {
    const response = await User.findAll()
    res.status(200).json(response)
} catch (error) {
    console.log(error.message)
}
}

export const getDataById = async(req, res) => {
    try {
        const response = await User.findOne({
            where:{
                id: req.params.id
            }
        })
        res.status(200).json(response)
    } catch (error) {
        console.log(error.message)
    }
    }

    export const createData = async(req, res) => {
        try {
          await User.create(req.body)
            res.status(201).json({msg: "user Created"})
        } catch (error) {
            console.log(error.message)
        }
        }
    
        export const updateData = async(req, res) => {
            try {
              await User.update(req.body,{
                where:{
                    id: req.params.id
                }
              })
                res.status(200).json({msg: "user updated"})
            } catch (error) {
                console.log(error.message)
            }
            }
              
            export const deleteData = async(req, res) => {
                try {
                  await User.destroy({
                    where:{
                        id: req.params.id
                    }
                  })
                    res.status(200).json({msg: "user deleted"})
                } catch (error) {
                    console.log(error.message)
                }
                }         