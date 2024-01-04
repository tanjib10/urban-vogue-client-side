import slide1 from "../../../../assets/product_1.png";
import slide2 from "../../../../assets/product_30.png";
import slide3 from "../../../../assets/product_9.png";
import slide4 from "../../../../assets/product_28.png";
import slide5 from "../../../../assets/product_20.png";
import slide6 from "../../../../assets/product_5.png";
import slide7 from "../../../../assets/product_3.png";
import slide8 from "../../../../assets/product_25.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <div className="mb-10">
      <SectionTitle heading="Categories"></SectionTitle>
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        //   centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        //   navigation={true}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide2} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide3} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide4} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide5} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide6} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide7} alt="" />
        </SwiperSlide>
        <SwiperSlide className="max-w-screen-sm mx-auto">
          <img className="ml-10 lg:ml-0" src={slide8} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
