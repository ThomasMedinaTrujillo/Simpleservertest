const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000
app.use(cors())
app.use(express.json())

app.get('/', (req,res) => {
  res.send({'message':'Hello World!'})
})

app.get('/formresults', (req, res)=> {
    res.send(req.query)
})

const store = [ ]
app.post('/formpost', (req, res) => {
    const dashboard = req.body
    const idgen = store.length
    dashboard.id = idgen
    store.push(dashboard)
    res.send({message: 'dashboard added successfully'})
    

})

app.get('/dashboards', (req, res) => {
    res.send(store)
} )

app.get('/dashboards/:id', (req, res) => {
    const lastid = store.length - 1
    const id = req.params.id
    if (id > lastid) {
        res.send({message: 'dashboard not found'})
    } else {
        res.send(store[id])
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
