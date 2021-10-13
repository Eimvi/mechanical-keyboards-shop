const response = require('../response')
const getKeyboard = require('../helpers/getKeyboard')

const verifyKeyboard = async (req, res, next) => {
    const { _id } = req.body
    try {
        const keyboard = await getKeyboard(_id)
        if(keyboard){
            next()
            return
        }
    } catch (error) {
            response.error({
                res,
                status: 404,
                text: 'Keyboard dont exists'
            })
    }
}

module.exports = {
    verifyKeyboard
}