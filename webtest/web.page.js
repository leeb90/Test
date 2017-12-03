// login.page.js
var Page = require('./Page')
var WebPage = Object.create(Page, {
    /**
     * define elements
     */
   
    links:      { get: function () { return browser.elements('a'); } },

    
});
module.exports = WebPage;