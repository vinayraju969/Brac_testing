
exports.config = {
    
    specs:['brac_spec.js'],
    jasmineNodeOpts: {
        defaultTimeoutInterval: 2500000,
    
    },

        capabilities: {
            'browserName': 'chrome',
            'goog:chromeOptions': {
               w3c: false
            }
 }
}