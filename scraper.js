var Xray = require('x-ray')
var x = Xray()

x('https://www.reddit.com/', '.Post', [
    {
        title: 'h3'
    }
])
    .write('results.json') //save data to a json file