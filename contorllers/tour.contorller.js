const Product = require('../models/Tour')
const TourtService = require('../service/tour.services')

module.exports.addTour = async(req, res, next)=>{
    try{
 
        
    const result = await TourtService.addTour(req.body);

      console.log();
      res.status(200).json({message:"success", data: result});
    }catch(error){
     console.log(error);
     res.status(400).json({message:"fail",data: error})
    }
 }


 module.exports.tours = async(req, res, next)=>{
    try{
        // 
        const tour = await TourtService.getTours();
        res.status(200).json({
            status:'success',
            data:tour
        })

    }catch(error){
        res.status(400).json({
            status:'faild',
            data:"data can not get"
        })
    }
}

module.exports.getUpdateTourById = async (req, res, next)=>{
    try{
        const {id} = req.params;
        console.log(id, req.body);
    const result = await TourtService.getUpdateTour(id, req.body);

    res.status(200).json({
        status:'success',
        data:result
    })
    }catch(error){
        res.status(400).json({
            status:'failed',
            data:"update data can not find"
        })
    }

}




