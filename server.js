// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
const express = require('express');
const { readFileSync } = require('fs');
const { basename } = require('path');
const { createServer } = require('http');
const accepts = require('accepts');
const glob = require('glob');
const next = require('next');

const bodyParser = require('body-parser');
const cookie = require('react-cookie');
const cookieParser = require('cookie-parser');
//const isomorphicCookie = require('isomorphic-cookie');
//const Cookies = require('universal-cookie');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get the supported languages by looking for translations in the `lang/` dir.
const languages = glob.sync('./lang/*.json').map(f => basename(f, '.json'));

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = locale => {
  const lang = locale.split('-')[0];
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's
// locale. These will only be used in production, in dev the `defaultMessage` in
// each message description in the source code will be used.
const getMessages = locale => {
  return require(`./lang/${locale}.json`);
};

app.prepare().then(() => {
  const server = express();
  server.use(bodyParser.json());
  server.use(cookieParser());
  server.use(
    unless(['/login', '/_next', '/static'], (req, res, next) => {
      const token = req.cookies['x-access-token'];
      if (!token) {
        res.redirect('/login');
      } else {
        next();
      }
    })
  );

  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

function unless(paths, middleware) {
  return function(req, res, next) {
    let isHave = false;
    paths.forEach(path => {
      if (path === req.path || req.path.includes(path)) {
        isHave = true;
        return;
      }
    });
    if (isHave) {
      return next();
    } else {
      return middleware(req, res, next);
    }
  };
}
