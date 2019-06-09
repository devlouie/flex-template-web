import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './FaqPage.css';
import image from './faq-1056.jpg';

const FaqPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="Frequently Asked Questions"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'FaqPag',
        description: 'Frequently Asked Questions',
        name: 'FAQ page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Frequently Asked Questions.</h1>
          <img className={css.coverImage} src={image} alt="FAQ-Smiling-People." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Q: How do i sign up?
              </h2>

              <p>    
                A: Do the things.    
              </p>

              <h3 className={css.subtitle}>Do you own a luxury vehicle rental business?</h3>

              <p>
                Motomo is currently looking to include more listings from existing luxury vehicle rental businesses in Australia.
                If you are interested in listing with motomo, please apply <ExternalLink href={siteTwitterPage}>here</ExternalLink>.
              </p>

              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default FaqPage;
