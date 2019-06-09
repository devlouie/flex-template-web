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
              <p>If you require support, please use our chat system to instantly speak to our 
                customer service representatives.
              </p>
            </div>

            <div className={css.contentMain}>
              <h2>
                How does motomo work?
              </h2>

              <p>    
              Motomo allows for the booking of a wide variety of vehicles and makes the booking process fast and easy. 

              Motomo deals directly with Australia's most reputable luxury car rental businesses, ensuring that you will always have confidence in booking your next rental. 
              
              Simply search for a vehicle, Request a booking and the responsible car rental business will contact you directly with confirmation and further instructions.    
              </p>


              <h2>
              What happens if i need to cancel a booking?
              </h2>

              <p> 
                In the incident where you require to cancel a booking, the following terms apply: {"\n"}
                · If the booking is cancelled 72 hours or greater prior to the scheduled commencement of the rental, a 90% refund is issued.{"\n"}
                · If the booking is cancelled within 72 hours to the scheduled commencement, a 50% refund is issued.{"\n"}
                · If the booking is cancelled within 24 hours to the scheduled commencement, refund is not issued.
              </p>



              <h3 className={css.subtitle}>Do you own a luxury vehicle rental business?</h3>

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
