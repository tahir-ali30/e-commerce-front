import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

function Hero() {
  return (
    <div className="w-full">
      <div className="">
        <Swiper
          className="w-full"
          modules={[Autoplay, Pagination]}
          autoplay={{ delay: 3800 }}
          loop={true}
          pagination={true}
        >
          <SwiperSlide className="relative">
            <Link to="#" className="h-60 rounded-md">
              <img
                src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/modules/cp_imageslider/views/img/sample-1.jpg"
                alt=""
                className="w-full h-full aspect-auto object-cover rounded-md"
              />
            </Link>
            <div className="hero-content absolute top-0 left-0 space-y-4 pt-32 pl-8">
              <p className="text-xl">Limited Time Offer!!</p>
              <p className="text-4xl font-semibold">
                Feel-Good Shopping What You Desire
              </p>
              <p className="text-xl">There Are Many Variations Of Passages</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="#" className="h-60">
              <img
                src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/modules/cp_imageslider/views/img/sample-2.jpg"
                alt=""
                className="w-full h-full aspect-auto object-cover"
              />
            </Link>
            <div className="hero-content absolute top-0 left-0 space-y-4 pt-32 pl-8">
              <p className="text-xl">Up to 60% off home furniture</p>
              <p className="text-4xl font-semibold">
                Buy Wooden Furniture Online for home
              </p>
              <p className="text-xl">There are many variations of passages.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="#" className="h-60">
              <img
                src="https://prestashop.coderplace.com/PRS03/PRS03058/demo/modules/cp_imageslider/views/img/sample-3.jpg"
                alt=""
                className="w-full h-full aspect-auto object-cover"
              />
            </Link>
            <div className="hero-content absolute top-0 left-0 space-y-4 pt-32 pl-8">
              <p className="text-xl">Today&apos;s Offer Fashion</p>
              <p className="text-4xl font-semibold">
                Fashion Best Defined Simply The Style
              </p>
              <p className="text-xl">There are many variations of passages.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Hero;
