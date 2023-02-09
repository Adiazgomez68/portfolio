const IoIosArrowForward = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="15px"
      viewBox="0 0 512 512"
      height="1.3em"
      width="1.6em"
      {...props}
    >
      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z" />
    </svg>
  );
};

const IoIosArrowBack = (props) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="15px"
      viewBox="0 0 512 512"
      height="1.3em"
      width="1.6em"
      {...props}
    >
      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z" />
    </svg>
  );
};

export const CustomRightArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;
  // onMove means if dragging or swiping in progress.
  return (
    <button
      onClick={() => onClick()}
      className="absolute p-1 rounded text-[#9F9F9F] right-2 duration-300 hover:bg-gray-100"
    >
      <IoIosArrowForward />
    </button>
  );
};

export const CustomLeftArrow = ({ onClick, ...rest }) => {
  const {
    onMove,
    carouselState: { currentSlide, deviceType },
  } = rest;

  return (
    <button
      onClick={() => onClick()}
      className="absolute p-1 rounded text-[#9F9F9F] left-2 duration-300 hover:bg-gray-100"
    >
      <IoIosArrowBack />
    </button>
  );
};
