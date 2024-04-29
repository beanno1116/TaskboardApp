
const AddButtonCircleIcon = ({ width = 16, height = 16 }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} fill="currentColor" viewBox="0 0 16 16">
      <defs>
        <linearGradient id="MyGradient">
          <stop offset="5%" stop-color="hsl(219, 42%, 50%)" />
          <stop offset="95%" stop-color="hsl(260, 43%, 26%)" />
        </linearGradient>
      </defs>
      <path id="addButtonIcon" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3z"/>
    </svg>
  );
}



const AddButtonCircle = ({ onClick, ...props }) => {
  const {width,height} = props;
  return (
    <button {...props} onClick={onClick}>
      <AddButtonCircleIcon width={width} height={height} />
    </button>
  );
}

export default AddButtonCircle;

