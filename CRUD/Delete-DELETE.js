//------------------------------Server Side---------------------------------

app.delete("/users/admin/:id", async (req, res) => {
    const id = req.params.id;
    const query = {_id: ObjectId(id)};
    const result = await usersCollection.deleteOne(query);
    res.send(result);
  });


  //------------------------------Client Side---------------------------------
//call it in Delete button 
onClick={() => handleDelete(user._id)}

//then write this function 
  const handleDelete = (id) => {
    fetch(`http://localhost:5000/users/admin/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((del) => {
        console.log(del);
        if (del.deletedCount > 0) {
          toast.success("Delete Successfully");
          refetch();
        }
      });
  };