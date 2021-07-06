const getJSON = require("get-json")
const express = require('express')
const app = express()
const port = 3000
app.set("view engine", "ejs");






app.get('/', function (req, res) {

    getJSON('https://www.trackcorona.live/api/cities', function (error, response) {

        console.log(error);

        var lati = response.data[0].latitude;
        var longi = response.data[0].longitude;
        var confirmed = response.data[0].confirmed;



        res.render('index', { lat: lati, long: longi })
    })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))