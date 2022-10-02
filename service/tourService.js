const Tour = require('../models/Tour')


module.exports.getTours = async()=>{

    const tour = await Tour.find({});
    return tour;
}


// save product in database 


module.exports.addTour = async(data)=>{

    const addTour = new Tour(data);
    const result = await addTour.save();

    return result;
 
}


// update Tour 

module.exports.getUpdateTour = async(id, data) =>{
    console.log("serid"+ id, data);
  const result = await  Tour.updateOne({_id: id}, {$set:data});

  return result;
    
}






