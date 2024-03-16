const express = require('express')
const router = express.Router();
const MenuItem = require("./../model/MenuItem");



router.post('/' ,async(req ,res)=>{
try{

  // Data come from client accept in data through req.body
  const data = req.body;
  const newData = new MenuItem(data) //Create a new instance of model 

   const response = await newData.save()
   console.log('data saved')
   res.status(200).json(response);

}catch(err){

   console.log(err)
   res.status(500).json({error:'Internal server Error'});
}
})



router.get('/:tasteType' ,async(req ,res)=>{
 try{
 
   // Data come from client accept in data through req.body
   const tasteType = req.params.tasteType;
   if(tasteType == 'spicy' || tasteType == 'sweet' || tasteType == 'salty' || tasteType == 'sour')
   {
    const response = await MenuItem.find({taste:tasteType})
    console.log('data is fetched')
    res.status(200).json(response);
   }else{

     res.status(500).json({error:'Invalid tasteType'})
     }
 }catch(err){
 
    console.log(err)
    res.status(500).json({error:'Internal server Error'});
 }
  })


// comment added for testing purpose
module.exports = router;