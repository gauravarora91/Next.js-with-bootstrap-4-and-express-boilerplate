import Layout from '../components/layout';
import { FormattedMessage, FormattedNumber, defineMessages } from 'react-intl';
import pageWithIntl from '../components/PageWithIntl';

const messages = defineMessages({
  about: {
    id: 'about',
    defaultMessage: 'An example app integrating React Intl with Next.js'
  }
});

export default pageWithIntl(({ intl }) =>
  <Layout title="Contact us">
    <div className="container">
      <div>Contact</div>
      <h1>
        {intl.formatMessage(messages.about)}
      </h1>
      <a>
        <FormattedMessage id="greeting" defaultMessage="Hello, World!" />
      </a>
    </div>
  </Layout>
);
