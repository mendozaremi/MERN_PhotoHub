require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const path = require('path')

connectDB();

const app = express();

app.use(express.json())


app.use("/api/products", productRoutes)

// Serve static assests if in production
if(process.env.NODE_ENV === 'production') {
  // Set static folder
  // give server acces to react application
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  // file we are sending
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  })
} else {
  app.get('/', (req,res) => {
      res.send("Api Running")
  })
}

// Port
const PORT = process.env.PORT || 5000;
 
// Listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))