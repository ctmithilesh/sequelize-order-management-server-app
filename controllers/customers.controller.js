const db = require('../models')
const Customer = db.customer
exports.addNewCustomer = async (req, res) => {


    const { firstName, email } = req.body
    console.log(firstName, email)
    await Customer.create({ firstName: firstName, email: email })
        .then(data => {
            res.send(data)

        })
        .catch(err => {
            res.status(500).send({ message: err })
        })


}