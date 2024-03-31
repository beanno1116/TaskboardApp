
const AssigneeIcon = ({ width = 16, height = 16 }) => {
  return (
  
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height}  viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c.685 0 1.354.069 2.001.2v2.052a8 8 0 00-7.86 13.195 3.988 3.988 0 011.981-1.05A19.248 19.248 0 0112 16c1.292 0 2.585.133 3.877.398.76.156 1.444.525 1.983 1.048A7.97 7.97 0 0020 12c0-.69-.087-1.36-.252-2H21.8c.131.646.2 1.315.2 2a9.971 9.971 0 01-3.073 7.212l-.001.001-.056.053a10.057 10.057 0 01-1.61 1.24A9.953 9.953 0 0112 22a9.954 9.954 0 01-4.951-1.31l-.31-.184-.02-.013a10.02 10.02 0 01-1.634-1.27l-.012-.01A9.971 9.971 0 012 12C2 6.477 6.477 2 12 2zm0 16c-1.157 0-2.315.119-3.476.357a1.998 1.998 0 00-.831.385A7.958 7.958 0 0012 20a7.963 7.963 0 004.307-1.257 1.984 1.984 0 00-.832-.386A17.249 17.249 0 0012 18zm0-11a4 4 0 110 8 4 4 0 010-8zm0 2a2 2 0 100 4 2 2 0 000-4zm8-7v2h2v2h-2v2h-2V5.999L16 6V4l2-.001V2h2z" fillRule="evenodd"></path>
    </svg>
  );
}



const AssigneeButton = ({ onClick, ...props }) => {
  const {width,height,showing} = props;
  return (
    <button {...props} onClick={onClick}>
      <AssigneeIcon width={width} height={height} />
    </button>
  );
}

export default AssigneeButton;

