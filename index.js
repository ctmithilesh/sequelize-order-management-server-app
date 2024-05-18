const express = require('express')
const app = express()

app.use(express.json())

const db = require('./models')

db.sequelize.authenticate()
    .then(() => {
        console.log('DB Connected')

    })
    .catch(err => {
        console.log(err)
    })



require('./routes/customers.routes')(app)
app.get('/', (req, res) => {
    res.send({ message: "Welcome to Express Server" })
})

app.listen(8080, () => {
    console.log('Server Started')
})