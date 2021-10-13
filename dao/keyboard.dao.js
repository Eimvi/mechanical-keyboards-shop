const mongoose = require('mongoose')

const keyboardI = require ('../models/keyboard.model')

keyboardI.statics = {
  create: function (data, cb) {
    const keyboard = new this(data)
    keyboard.save(cb)
  }
}
const keyboardModel = mongoose.model('keyboard', keyboardI)
module.exports  = keyboardModel
  