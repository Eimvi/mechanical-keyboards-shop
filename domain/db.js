const mongoose = require('mongoose')
const { connect, connection } = mongoose

const { DB } = require('./properties')

module.exports = () => {
    connect(DB)
    .then(() => console.log(`Mongo connected`))
    .catch(err => console.log(`Mongo failed`, err))

    process.on('SIGINT', () => {
        connection.close(()=>{
            console.log('Mongo disconnected')
            process.exit(0)
        })
    })
}