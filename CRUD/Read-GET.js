//------------------------------Server Side---------------------------------

app.get('/users', async (req,res)=>{
    const role = req.query.role;
    const result = await usersCollection.find({role:role}).toArray();
    res.send(result);
})