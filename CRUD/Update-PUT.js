app.put('/users/:id', async (req,res) => {
    const id = req.params.id;
    const filler = {_id:ObjectId(id)}
    const options = {upsert: true};
    const updatedData ={
        $set:{
            identity:'Verified'
        }
    }
    const result = await usersCollection.updateOne(filler,updatedData,options)
    res.send(result);
})