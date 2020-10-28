const express = require('express')
const path = require('path')

const app = express()

/* app.use('/', express.static(path.join(__dirname, 'client/build'))) */

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(3000, () => console.log("Listening on port 3000"))