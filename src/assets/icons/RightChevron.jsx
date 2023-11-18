

const RightChevronIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
      <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  );
}



const RightChevronButton = ({ onClick, ...props }) => {
  const {width,height} = props;
  return (
    <button {...props} onClick={onClick}>
      <RightChevronIcon width={width} height={height} />
    </button>
  );
}

export default RightChevronIcon;


