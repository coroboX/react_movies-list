import PropTypes from 'prop-types';

export const cardProp = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  imdbUrl: PropTypes.string.isRequired,
};

export const cardsProp = PropTypes.arrayOf(
  PropTypes.shape({
    ...cardProp,
    imdbId: PropTypes.string.isRequired,
  }),
);
