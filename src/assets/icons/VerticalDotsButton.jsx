
const VerticalDotsIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
      <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
    </svg>
  );
}



const VerticalDotsButton = ({ onClick, ...props }) => {
  const {width,height} = props;
  return (
    <button {...props} onClick={onClick}>
      <VerticalDotsIcon width={width} height={height} />
    </button>
  );
}

export default VerticalDotsButton;

