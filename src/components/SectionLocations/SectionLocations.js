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
          '?address=Sydney%2C%20Australia&bounds=-33.578140996%2C151.343020992%2C-34.118344992%2C150.520928608&origin=-33.868%2C151.21',
        )}
        {locationLink(
          'Melbourne',
          melbourneImage,
          '?address=Melbourne%2C%20Victoria&bounds=-37.5112737225%2C145.512528832%2C-38.433859306%2C144.593741856&origin=-37.8142%144.9632',
        )}
        {locationLink(
          'Brisbane',
          brisbaneImage,
          '?address=Brisbane%2C%20Queensland&bounds=-26.996844991%2C153.31787024%2C-27.767436998%2C152.668522848&origin=-27.469%153.0235',
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
