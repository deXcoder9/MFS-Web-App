const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const app = express()
const cors = require('cors');
require('dotenv').config()
const bcrypt = require('bcrypt');
const port = process.env.PORT || 5000;


// middleware
app.use(cors())
app.use(express.json())



const uri = `mongodb+srv://MFS:${process.env.DB__Pass}@cluster0.wvuyzyg.mongodb.net/?appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const dataBase = client.db('MFS')
    const userInfo = dataBase.collection('userInfo')


    // registration 
    app.post('/registration', async(req, res) => {
      const { name, pin, mobile, email } = req.body;
      const userEmailExists = await userInfo.findOne({ email });
      if (userEmailExists) {
        return res.send({ message: 'User already exists' });
      }
      const userNumberExists = await userInfo.findOne({ mobile });
      if (userNumberExists) {
        return res.send({ message: 'User already exists' });
      }
      // password hashing
      const passwordHash = await bcrypt.hash(pin, 10);
      // console.log(passwordHash)

      await userInfo.insertOne({ name, pin: passwordHash, mobile, email });
      res.send({ message: 'User registered successfully' });
    })

    // login
    app.post('/loginverifications', async(req, res) => {
      const { email, mobile, pin } = req.body;
      let user;
      
      if (email){
        user = await userInfo.findOne({ email });
      } else if (mobile) {
        user = await userInfo.findOne({ mobile });
      }
      
      // console.log(user)
      if (!user) {
        return res.send({ message: 'User not found' });
      }
      const isMatch = await bcrypt.compare(pin, user.pin);
      if (!isMatch) {
        return res.send({ message: 'Invalid PIN' });
      }
      res.send({ message: 'User logged in successfully' });
    })

    app.get('/info', async(req, res) => {
      const users = await userInfo.find().toArray();
      res.send(users);
    })

    // user related api
    app.post('/userinfo', async(req, res) => {
      const userDetails =  req.body;
      // console.log("form frontend", userDetails)
      const query = {email: userDetails.user}
      const result = await userInfo.findOne(query)
      res.send(result)
    })








    
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    // await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);





app.get('/', (req, res) =>{
    res.send("MFS is running ")
})

app.listen(port, () =>{
    console.log(`Server running at http://localhost:${port}`)
})