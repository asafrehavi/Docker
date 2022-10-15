const express = require('express')
const app = express()
const port = 3000
const request = require('request');

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/', function(req, res){
  request('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY', function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
      
    }
    else{
      res.sendStatus(500)
    }
  })
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})




