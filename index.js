var express = require('express'),
    cookieParser = require('cookie-parser'),
    i18n = require('i18n'),
    app = module.exports = express();
 
i18n.configure({
  // setup some locales - other locales default to en silently
  locales: ['en', 'ru', 'de'],
 
  // sets a custom cookie name to parse locale settings from
  cookie: 'lang',
 
  // where to store json files - defaults to './locales'
  directory: __dirname + '/locales'
});
 
// you will need to use cookieParser to expose cookies to req.cookies
app.use(cookieParser());

// i18n init parses req for language headers, cookies, etc.
app.use(i18n.init);
 
// serving homepage
app.get('/', function (req, res) {
  res.cookie('lang','ru');
  res.send(res.__('Hello World'));
});
 
// starting server
if (!module.parent) {
  app.listen(3000);
}