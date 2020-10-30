const express = require('express')
const path = require('path')

const app = express()

 app.use(express.static(path.join(__dirname, 'client/build')))

 app.get('/api/hello-world', (req, res) => {
     res.send([{id: 'Katya'},
    {name: 'Rios'},
    {age: '5'}
  ])
 })

app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.listen(3000)