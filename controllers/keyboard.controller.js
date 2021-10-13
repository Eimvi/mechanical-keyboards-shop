const keyboardModel = require('../dao/keyboard.dao')
const response = require('../response')

module.exports = {

    getKeyboards: async (req, res) => {
        try {
            const keyboards = await keyboardModel.find({})
            response.success({
                res,
                body: keyboards
            })
        } catch (error) {
            response.error({
                res,
                text: error
            })
        }
    }
}