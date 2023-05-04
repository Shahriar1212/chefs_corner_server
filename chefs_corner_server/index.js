const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const cors = require('cors');
const chefs = require('./data/chefs.json')
const recipes = require('./data/recipes.json')


app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/chefs', (req, res) => {
    res.send(chefs);
})

app.get('/chef/:id', (req, res) => {
    const id = req.params.id;
    // console.log(id);
    const selectedChef = chefs.find(n => n.chef_id == parseInt(id));
    const selectedRecipes = recipes.filter(n => n.chef_id == id);
    console.log(selectedRecipes);
    const data = [];
    data.push(selectedChef);
    data.push(selectedRecipes);
    console.log(data);
    res.send(data)
})

app.get('/recipes', (req, res) => {

    res.send(chefs)
})

app.get('/recipe/:id', (req, res) => {
    const id = req.params.id;
    console.log(id);
    const selectedRecipe = recipes.find(n => n.id == id);
    res.send(selectedRecipe);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})