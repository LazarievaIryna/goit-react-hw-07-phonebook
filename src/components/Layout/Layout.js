import PropTypes from 'prop-types';
import {Wrapper} from './Layout.styled'
export const Layout = ({ children }) => {
  return <Wrapper >{children}</Wrapper>;
};
Layout.propTypes = {
  
  children: PropTypes.array.isRequired,
   
  }
