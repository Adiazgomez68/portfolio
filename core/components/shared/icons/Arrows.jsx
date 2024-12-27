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

export function ArrowRight(props, { size = "1em", className = "" }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      className={className}
      viewBox="0 0 1024 1024"
      height={size}
      width={size}
      {...props}
    >
      <path d="M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 0 0 188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 0 0 492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z" />
    </svg>
  );
}

export function RightArrowTriangle(props, { className = "" }) {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      className={`w-5 h-5 ${className}`}
      {...props}
    >
      <path d="M5.536,21.886C5.682,21.962,5.841,22,6,22c0.2,0,0.398-0.06,0.569-0.178l13-9C19.839,12.635,20,12.328,20,12 s-0.161-0.635-0.431-0.822l-13-9C6.264,1.966,5.864,1.941,5.536,2.114C5.206,2.287,5,2.628,5,3v18 C5,21.372,5.206,21.713,5.536,21.886z M7,4.909L17.243,12L7,19.091V4.909z" />
    </svg>
  );
}
