import PropTypes from 'prop-types';

export const Error = ({ children }) => {
    return <p>{children}</p>;
  };

  Error.propTypes = {
    children: PropTypes.object.isRequired,
    }
  