import mongoose from 'mongoose';
import User from "@/models/userModel";

// MongoDB connection string
const MONGODB_URI = 'mongodb+srv://eduplatform:Sabolaigh1@cluster0.yzlik.mongodb.net/';

const updateCompletionDates = async (): Promise<void> => {
  try {
    // Connect to MongoDB with current options
    await mongoose.connect(MONGODB_URI);
    console.log('Connected to MongoDB');

    // Update all documents
    const result = await User.updateMany(
      { 'coursesPurchased.completionDate': { $exists: false } },
      { $set: { 'coursesPurchased.$[].completionDate': null } }
    );

    console.log(`Updated ${result.modifiedCount} documents`);
  } catch (error) {
    console.error('Migration failed:', error);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
};

updateCompletionDates();
