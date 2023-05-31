import GridLoader from "react-spinners/GridLoader";
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