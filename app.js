const express = require('express')
const path = require('path')
const axios = require('axios')
const app = express()

 app.get("/api/search-data", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=andysterks", 
        config)
        .then((response) => res.send(response.data))
        .catch((error) => console.log(error))
})

app.get("/api/user-andy", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=andysterks", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[0])
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

app.get("/api/user-corvette", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=corvetteRacing", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[0])
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

app.get("/api/user-twosetviolin", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=TwoSetViolin", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[0])
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

app.get("/api/user-batman-dc", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=BatmanDC__", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[0])
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

app.get("/api/user-starwars", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=starwars", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[0])
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

const randomNumber= Math.floor( Math.random() * 10)
app.get("/api/user-random", (req, res) => {
    const config = {
        headers: {
        Authorization: "Bearer AAAAAAAAAAAAAAAAAAAAAIOxIQEAAAAAKFf8DdG4K56GF2Rn9oCsWrLIZ%2BY%3DYu2zoKa4EVpTGDKv4xlDqp4a0krRhaUyrXXwHeE8LL6HlDs9Et"  
        }
    }
    axios
        .get("https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=starwars&count=10", 
        config)
        .then((response) => {
            const tweet = []
            tweet.push(response.data[randomNumber])
            console.log(randomNumber)
            res.send(tweet)
        })
        .catch((error) => console.log(error))
})

app.use(express.static(path.join(__dirname, 'client/build')))



app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(3000)