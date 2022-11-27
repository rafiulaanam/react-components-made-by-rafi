

app.post('/users', async (req,res) => {
    const users = req.body;
    const result = await usersCollection.insertOne(users)
    res.send(result);
    })