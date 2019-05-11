/*
 * Marketplace specific configuration.
 */

export const amenities = [
  {
    key: 'sunroof',
    label: 'Sunroof',
  },
  {
    key: 'premium_surround_sound_system',
    label: 'Premium surround sound system',
  },
  {
    key: 'turbocharged',
    label: 'Turbocharged',
  },
  {
    key: 'supercharged',
    label: 'Surbocharged',
  },
];

export const categories = [
  { key: 'Luxury', label: 'Luxury' },
  { key: 'Sport', label: 'Sport' },
  { key: 'Exotic', label: 'Exotic' },
  { key: 'Vintage', label: 'Vintage' },
  { key: 'Rare', label: 'Rare' },
];

// Price filter configuration
// Note: unlike most prices this is not handled in subunits
export const priceFilterConfig = {
  min: 0,
  max: 5000,
  step: 5,
};

// Activate booking dates filter on search page
export const dateRangeFilterConfig = {
  active: true,
};
