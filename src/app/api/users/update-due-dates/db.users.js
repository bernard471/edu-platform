db.users.updateMany(
    { "coursesPurchased.dueDate": { $exists: false } },
    { 
      $set: { 
        "coursesPurchased.$[].dueDate": new Date(Date.now() + 5 * 24 * 60 * 60 * 1000)
      } 
    }
  )
  