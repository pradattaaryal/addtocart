import mongoose from 'mongoose';

const connectToDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://pradattaaryal2468:131n151-1a@cluster0.3fafosj.mongodb.net/e-commerce", {
     
    });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

export default connectToDatabase;
