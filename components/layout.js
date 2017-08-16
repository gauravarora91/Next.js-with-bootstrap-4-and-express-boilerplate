import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
//import stylesheet from '../styles/bootstrap-grid.min.css';
//import bootstrap from '../styles/bootstrap.min.css';
import stylesheet from '../styles/scss/themes/light/light.scss';

import { defineMessages, injectIntl } from 'react-intl';

const messages = defineMessages({
  title: {
    id: 'title',
    defaultMessage: 'React Intl Next.js Example'
  }
});

export default injectIntl(({ intl, title, children }) =>
  <div id="layout">
    <Head>
      <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
      <meta charset="utf-8" />
      <title>
        {title || intl.formatMessage(messages.title)}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link rel="apple-touch-icon" href="pages/ico/60.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="pages/ico/76.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="pages/ico/120.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="pages/ico/152.png" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-touch-fullscreen" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta content="" name="description" />
      <meta content="" name="author" />
      <link href="/static/assets/plugins/bootstrap/css/bootstrap.min.css" rel="stylesheet" type="text/css" />
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
    </Head>

    {children}

    <footer>
      <div className="container">
        {'Footer'}
      </div>
    </footer>
    <style jsx>{`
      #layout {
        height: 100%;
      }
    `}</style>
  </div>
);
