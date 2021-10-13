const { Schema, set } = require('mongoose')
const keyboardSchema = new Schema(
    {
        name: {
            type: String,
            lowercase: true
        },
        primary: {
            type: String,
            lowercase: true
        },
        secundary: {
            type: String,
            lowercase: true
        }
    },
    {
        timestamps: true
    }
)
module.exports = keyboardSchema
