import { Icon } from "@iconify-icon/react/dist/iconify.js";

function SwiperNavigations({ leftRef, rightRef }) {
  return (
    <>
      <button
        ref={leftRef}
        className="absolute -translate-y-1/2 top-1/2 left-0 flex items-center justify-center bg-white rounded-full p-3 z-10 shadow-lg opacity-0 navs disabled:text-gray-400 transition-opacity duration-300 ease-in"
      >
        <Icon icon={"mynaui:arrow-left"} />
      </button>
      <button
        ref={rightRef}
        className="absolute -translate-y-1/2 top-1/2 right-0 flex items-center justify-center bg-white rounded-full p-3 z-10 shadow-lg opacity-0 navs disabled:text-gray-400 transition-opacity duration-300 ease-in"
      >
        <Icon icon={"mynaui:arrow-right"} />
      </button>
    </>
  );
}

export default SwiperNavigations;
