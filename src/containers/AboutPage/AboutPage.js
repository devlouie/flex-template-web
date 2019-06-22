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

import css from './AboutPage.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Motomo',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Pure Exhilaration.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Enjoy one of the largest ranges of rental luxury, exotic, sport, electric and rare 
                vehicles in Australia.</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                The easiest way to book!
              </h2>

              <p>    
                With motomo, booking rental luxury cars could not be easier ( trust us, we've tried ). Simply 
                create an account, search through the website for a car that picks your interest and place a booking.
                Please note that bookings will be finalised with the rental agency that has listed the vehicle and not with motomo.
                Generally, unless mentioned otherwise, you will require 100 points of ID, a deposit and need to be over 25 years old.    
              </p>

              <h3 className={css.subtitle}>Do you own a luxury vehicle rental business?</h3>

              <p>
                Motomo is currently looking to include more listings from existing luxury vehicle rental businesses in Australia.
                If you are interested in listing with motomo, please speak to our customer representatives through the website chat system.
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

export default AboutPage;
