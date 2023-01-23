import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const pagination = {
    el: ".SubMain-slider__pagination",
    clickable: true,
    renderBullet: (index, className) => {
        return '<span class="' + className + '"></span>';
    }
}

const SubMainSlider = () => {
    return (
        <div className="SubMain-slider w-100">
            <Swiper
                pagination={pagination}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="SubMain-slider__swiper"
            >
                <SwiperSlide>
                    <Image src="/images/image 1-1.png" alt="" width="0" height="0" sizes="100vw" />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Image src="/images/image 1-1.png" alt="" width="0" height="0" sizes="100vw" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 1-1.png" alt="" width="0" height="0" sizes="100vw" />
                </SwiperSlide>
            </Swiper>

            <div className="SubMain-slider__pagination"></div>
        </div>
    );
}

export default SubMainSlider;