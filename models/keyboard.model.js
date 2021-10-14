const { Schema, set } = require('mongoose')
const keyboardSchema = new Schema(
    {
        name: {
            type: String
        },
        price: {
            type: Number
        },
        switchs: {
            type: String
        }
    },
    {
        timestamps: true
    }
)
module.exports = keyboardSchema
