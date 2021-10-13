const keyboardModel = require('../dao/keyboard.dao')

const getKeyboard = async (_id) => {
    const keyboard = await keyboardModel.findById({ _id })
    return keyboard
}

module.exports = getKeyboard