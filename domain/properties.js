const { config } = require('dotenv')
config()

const PORT = process.env.PORT || 3200
const DB = process.env.DB

module.exports = {
    PORT, DB
}