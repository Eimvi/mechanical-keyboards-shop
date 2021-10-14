const keyboardModel = require('../dao/keyboard.dao')
const response = require('../response')
const context = require('../pages/global.json')
const home = require('../pages/home.json')

module.exports = {

    getKeyboards: async (req, res) => {
        try {
            const keyboards = await keyboardModel.find({})

            function iterar(element, index, array) {
                home.about.images[index].caption = element.name

            }
            keyboards.forEach(iterar)   

            res.render('home', { context, home })

            // response.success({
            //     res,
            //     body: keyboards
            // })
        } catch (error) {
            response.error({
                res,
                text: error
            })
        }
    }
}