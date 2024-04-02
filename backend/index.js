 
import express from 'express';
import cors from 'cors';
import connectToDatabase from './database/connection.js';
 import xxx from './model/product.js'
const app = express();
const port = 3000;
app.use(express.json())
 
app.use(cors());

 /*await users.deleteMany({})*/
app.get('/', async (req, res) => {
  try {const productData=await xxx.find({});
  res.json(productData)
   } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
  }
});
 
// Start the server after connecting to the database
connectToDatabase().then(() => {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});
