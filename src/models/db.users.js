db.users.update(
    { _id: ObjectId("678a4e107fe6431db82b0353"), "coursesPurchased.courseId": "cyber-fundamentals" },
    { $set: { "coursesPurchased.$.completionDate": new Date("2025-01-17T12:41:34.407Z") } }
  );
  