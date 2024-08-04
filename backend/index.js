const connectToMongo = require('./db');
const express = require('express')
connectToMongo();

const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello Ahsan!')
// })

// Available routes
app.use('/api/auth', require('./routes/auth')) 

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})