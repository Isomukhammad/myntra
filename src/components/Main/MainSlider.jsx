import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { useRef, useState } from "react";

const pagination = {
    el: ".Main-slider__pagination",
    clickable: true,
    renderBullet: (index, className) => {
        return '<span class="' + className + '"></span>';
    }
}

const MainSlider = () => {
    const swiperBtnRef = useRef()
    return (
        <div className="Main-slider w-100">
            <Swiper
                pagination={pagination}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                spaceBetween={30}
                loop={true}
                modules={[Pagination, Autoplay]}
                className="Main-slider__swiper"
                onBeforeInit={(swiper) => {
                    swiperBtnRef.current = swiper
                }}
            >
                <SwiperSlide>
                    <Image src="/images/image 1.png" alt="" width="0" height="0" sizes="100vw" placeholder="blurDataURL" />
                </SwiperSlide>
                <SwiperSlide className="w-full">
                    <Image src="/images/image 1-1.png" alt="" width="0" height="0" sizes="100vw" placeholder="blurDataURL" />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 1.png" alt="" width="0" height="0" sizes="100vw" placeholder="blurDataURL" />
                </SwiperSlide>
            </Swiper>

            <div
                className="Main-slider__prevBtn "
                onClick={() => {
                    swiperBtnRef.current?.slidePrev()
                }}
            >
                <svg
                    width={28}
                    height={28}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='white'
                >
                    <use xlinkHref={`#arr-left`}></use>
                </svg>
            </div>
            <div
                className="Main-slider__nextBtn bg-black bg-opacity-25 p-3 w-fit absolute right-0 top-40 z-[1] rounded-[500px]"
                onClick={() => {
                    swiperBtnRef.current?.slideNext()
                }}
            >
                <svg
                    width={28}
                    height={28}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke="white"
                >
                    <use xlinkHref={`#arr-right`}></use>
                </svg>
            </div>

            <div className="Main-slider__pagination"></div>
        </div>
    );
}

export default MainSlider;