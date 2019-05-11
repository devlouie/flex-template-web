import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';
import { lazyLoadWithDimensions } from '../../util/contextHelpers';

import { NamedLink } from '../../components';

import css from './SectionLocations.css';

import sydneyImage from './images/location_sydney.jpg';
import melbourneImage from './images/location_melbourne.jpg';
import brisbaneImage from './images/location_brisbane.jpg';

class LocationImage extends Component {
  render() {
    const { alt, ...rest } = this.props;
    return <img alt={alt} {...rest} />;
  }
}
const LazyImage = lazyLoadWithDimensions(LocationImage);

const locationLink = (name, image, searchQuery) => {
  const nameText = <span className={css.locationName}>{name}</span>;
  return (
    <NamedLink name="SearchPage" to={{ search: searchQuery }} className={css.location}>
      <div className={css.imageWrapper}>
        <div className={css.aspectWrapper}>
          <LazyImage src={image} alt={name} className={css.locationImage} />
        </div>
      </div>
      <div className={css.linkText}>
        <FormattedMessage
          id="SectionLocations.listingsInLocation"
          values={{ location: nameText }}
        />
      </div>
    </NamedLink>
  );
};

const SectionLocations = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);

  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionLocations.title" />
      </div>
      <div className={css.locations}>
        {locationLink(
          'Sydney',
          sydneyImage,
          '?address=Sydney%2C%20Australia&bounds=-33.2272006%2C150.8148193%2C-34.4159734%2C151.1471558&origin=-33.8654268%2C-208.789072'
        )}
        {locationLink(
          'Melbourne',
          melbourneImage,
          '?address=Melbourn%2C%20Australiae&bounds=-37.6468593%2C144.7064209%2C-38.0848514%2C145.1637268&origin=-37.8168359%2C-215.0426102'
        )}
        {locationLink(
          'Brisbane',
          brisbaneImage,
          '?address=Brisbane%2C%20Australia&bounds=-27.3540826%2C152.9049683%2C-27.5673301%2C153.1446075&origin=-27.4698967%2C-206.9769287'
        )}
      </div>
    </div>
  );
};

SectionLocations.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionLocations.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionLocations;
