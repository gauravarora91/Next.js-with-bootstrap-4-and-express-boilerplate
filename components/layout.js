import Link from 'next/link';
import Head from 'next/head';
import Header from './Header';
//import stylesheet from '../styles/bootstrap-grid.min.css';
import stylesheet from '../styles/bootstrap.min.css';

export default ({ children, title = 'This is the default title' }) =>
  <div>
    <Head>
      <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
      <title>
        {title}
      </title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <Header />

    {children}

    <footer>
      <div className="container">
        {'Footer'}
      </div>
    </footer>
  </div>;
