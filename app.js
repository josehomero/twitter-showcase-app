const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()

app.get("api/get-tweet-data", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer [AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et]"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=andysterks", 
        config)
        .then((response) => console.log(response.data))
        .catch((error) => console.log(error))
})

app.use(express.static(path.join(__dirname, 'client/build')))



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(3000)