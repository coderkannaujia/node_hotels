const express = require('express')
const router = express.Router();
const Person = require("./../model/Person");



// post method to add a person
router.post("/", async (req, res) => {
 try {
   const data = req.body; //Asumming the request body contains the person data

   //Creat a new person document using the mongoose model
   const newPerson = new Person(data);

   // save the new person to the database
   const response = await newPerson.save();
   console.log("data saved");
   res.status(200).json(response);
 } catch (err) {
   console.log(err);
   res.status(500).json({ error: "Internal Server Error" });
 }
});


//GET method to access the data 
router.get("/:workType", async (req, res) => {
 try {
   const workType = req.params.workType; // Extract the worktype from the url parameter
   if(workType == "chef" || workType == "manager" || workType == "waiter") {
     const response = await Person.find({ works: workType });
     console.log("data is fetched");
     res.status(200).json(response);
   } else {
     res.status(500).json({ error: "Invalid worktype" });
   }
 } catch (err) {
   console.log(err);
   res.status(500).json({ error: "Internal Server Error" });
 }
});


// put method to update a person data
router.put('/:id',async(req,res)=>{
try{ 
     const personId = req.params.id;
      const updatedPersonData = req.body
     const data = await Person.findByIdAndUpdate(personId ,updatedPersonData)
    console.log('data updated');
    res.status(300).json(data);
     
}catch(err){

 
 console.log(err);
 res.status(500).json({ error: "Internal Server Error" });

}
})

// Delete method to delte the data
router.delete('/:id' ,async(req ,res)=>{
 try{
        const personId = req.params.id;

        const response = await Person.findByIdAndDelete(personId)

        if(!response){
         return res.status(404).json({message:'Person not found'})
        }
        console.log("data delete");
        res.status(200).json({message:'person Deleted Successfully'})
 }catch(err){

   console.log(err);
   res.status(500).json({ error: "Internal Server Error" });
 }
})


module.exports = router;