import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Pagination, Thumbs } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";

const ProductSlider = () => {
    const swiperBtnRef = useRef()
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className="Product-slider relative">
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                spaceBetween={10}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[FreeMode, Thumbs, Pagination, Navigation]}
                className="Product-slider__main"
                onBeforeInit={(swiper) => {
                    swiperBtnRef.current = swiper
                }}
            >
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
            </Swiper>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={"auto"}
                freeMode={true}
                watchSlidesProgress={true}
                modules={[Thumbs, Pagination]}
                className="Product-slider__thumbs"
            >
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
                <SwiperSlide>
                    <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} />
                </SwiperSlide>
            </Swiper>
            <div
                onClick={() => {
                    swiperBtnRef.current?.slidePrev()
                }}
                className="invisible absolute bg-[#0000003b] z-[1] bottom-4 left-10 p-[12px_12px_12px_10px] rounded-full cursor-pointer lg:visible"
            >
                <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='white'
                >
                    <use xlinkHref={`#arr-left`}></use>
                </svg>
            </div>
            <div
                onClick={() => {
                    swiperBtnRef.current?.slideNext()
                }}
                className="invisibile absolute right-10 bottom-4 bg-[#0000003b] z-[1] p-[12px_12px_12px_10px] rounded-full cursor-pointer lg:visible"
            >
                <svg
                    width={24}
                    height={24}
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='white'
                >
                    <use xlinkHref={`#arr-right`}></use>
                </svg>
            </div>
        </div>
    );
}

export default ProductSlider;