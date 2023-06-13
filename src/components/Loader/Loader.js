import GridLoader from "react-spinners/GridLoader";
import PropTypes from 'prop-types';
export const Loader =({isLoading})=>{

    return(<GridLoader
        color="#36d7b7"
        cssOverride={{}}
        loading={isLoading}
        margin={2}
        size={13}
        width={15}
      />)
}
Loader.propTypes = {
  
  isLoading: PropTypes.bool.isRequired,
   
  }
