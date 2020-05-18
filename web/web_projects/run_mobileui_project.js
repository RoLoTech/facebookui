express = require('express')
path = require('path')
serveStatic = require('serve-static')
app = express()
port = process.env.PORT || 3000
app.use(serveStatic(path.join(__dirname, 'mobileui_project/www')))
app.listen(port,  function () {
    console.log('listening on port:', port)
})