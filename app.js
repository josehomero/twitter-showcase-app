import axios from 'axios'
import { request } from 'http'

const express = require('express')
const path = require('path')

const app = express()

 app.use(express.static(path.join(__dirname, 'client/build')))

 app.get('api/get-tweet-data', (req, res) => {
     request( "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=andysterks?key"
 })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(3000)