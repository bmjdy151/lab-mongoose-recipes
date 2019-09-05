const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
  mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

  Recipe.create()
  .then(()=>{
    console.log("success creating!");
  })
  .catch(err => {
    console.error('Error in creating', err);
  });

  // Recipe.insertMany(data)
  // .then(()=>{
  //   console.log("success inserting!");
  // })
  // .catch(err => {
  //   console.error('Error in inserting', err);
  // });

  mongoose.set("useCreateIndex",true);

  Recipe.updateOne({title:"Rigatoni alla Genovese"}, {duration:100} )
  .then(()=>{
    console.log("success updating!");
  })
  .catch(err => {
    console.error('Error in updating', err);
  });

  Recipe.remove({title:"Carrot Cake"})
  .then(()=>{
    console.log("success removing!");
  })
  .then(()=>{
    return mongoose.connection.close()
  })
  .catch(err => {
    console.error('Error in removing', err);
  });


