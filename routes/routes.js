
const keyboardController = require('../controllers/keyboard.controller')
const { verifyKeyboard } = require('../middlewares/keyboard')
const context = require('../pages/global.json')
const home = require('../pages/home.json')

module.exports = (router) => {
router.get('/', keyboardController.getKeyboards)

router.get('/blog', (req, res, next) =>{

    res.render('blog', {context, home})
});

router.get('/items', keyboardController.getKeyboards)

}
