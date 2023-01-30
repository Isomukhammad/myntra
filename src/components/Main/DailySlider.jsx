// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import DailyProduct from "../Product/DailyProduct";

const pagination = {
    el: ".Daily-slider__pagination",
    clickable: true,
    renderBullet: (index, className) => {
        return '<span class="' + className + ' h-[4px] w-[40px]"></span>';
    }
}

const DailySlider = () => {
    return (
        <div className="Daily-slider bg-white rounded-sm p-[24px] pb-[64px] md:pb-[24px]">
            <h1 className="font-semibold text-[20px] mb-8">Товар дня</h1>

            <Swiper
                pagination={pagination}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="Daily-slider__slider"
            >
                <SwiperSlide><DailyProduct /></SwiperSlide>
                <SwiperSlide><DailyProduct /></SwiperSlide>
                <SwiperSlide><DailyProduct /></SwiperSlide>
            </Swiper>

            <div className="Daily-slider__pagination"></div>
        </div >
    );
}

export default DailySlider;