require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db')
const productRoutes = require('./routes/productRoutes')
const path = require('path')

connectDB();

const app = express();

app.use(express.json())

app.get("/", (req, res) => {
  res.json({ message: "API running..." });
});


// Serve static assests if in production
if(process.env.NODE_ENV === 'prduction') {
  // Set static folder
  app.use(express.static('frontend/build'))

  app.use.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build, index.html'))
  });
}

app.use("/api/products", productRoutes)

// Port
const PORT = process.env.PORT || 5000;
 
// Listen
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))