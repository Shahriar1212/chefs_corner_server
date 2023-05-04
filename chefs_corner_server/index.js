const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const chefs = require('./data/chefs.json')


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    // console.log(parseid);
    const selectedChef = chefs.find(n => n.chef_id === parseInt(id));
    console.log(selectedChef);
    res.send(selectedChef)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})