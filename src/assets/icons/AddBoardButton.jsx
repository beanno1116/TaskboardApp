
const AddBoardIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
    </svg>
  );
}



const AddBoardButton = ({ onClick, ...props }) => {
  const {width,height} = props;
  return (
    <button {...props} onClick={onClick}>
      <AddBoardIcon width={width} height={height} />
    </button>
  );
}

export default AddBoardButton;

