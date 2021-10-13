module.exports = {
    success: (args) => {
        args.res.status(args.status || 201).send({
            success: true,
            text: args.text || 'Successful request',
            body: args.body || {}
        })
    },
    error: (args) => {
        if(args.errorDetails) {
            console.error('[response] ', args.errorDetails)
        }

        args.res.status(args.status || 404).send({
            success: false,
            text: args.text || 'Server error'
        })
    }
}