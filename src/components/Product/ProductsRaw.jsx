import ProductTab from "./ProductTab";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const ProductsRaw = ({ title, time }) => {
    return (
        <div className="Products-raw flex flex-col gap-8 mx-[-34px]">
            <div className="flex flex-row justify-between items-center px-[34px]">
                <div className="Products-raw__headline flex flex-row gap-4 items-center">
                    <h1 className="text-[20px] font-bold lg:text-[28px]">{title}</h1>
                    {time ? <div className="Products-raw__headline__time">
                        <p className="text-white font-semibold">{time}</p>
                    </div> : null}
                </div>
                <div className="group hidden md:flex flex-row items-center gap-1 font-semibold text-purpleMain hover:text-purpleDark transition-all duration-300 cursor-pointer">
                    <p>Смотреть все </p>
                    <svg
                        viewBox="0 0 24 24"
                        width={24}
                        height={24}
                        className="group-hover:fill-purpleDark fill-purpleMain transition-all duration-300"
                    >
                        <use xlinkHref="#arrow-right"></use>
                    </svg>
                </div>
            </div>

            <div className="Products-raw__slider relative hidden lg:flex 2xl:px-[34px]">
                <Swiper
                    spaceBetween={16}
                    navigation={true}
                    slidesPerView={'auto'}
                    loopFillGroupWithBlank={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                    <SwiperSlide><ProductTab /></SwiperSlide>
                </Swiper>
            </div>

            <div className="Products-raw__mobile flex flex-nowrap overflow-scroll gap-4 px-[34px] lg:hidden">
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
                <ProductTab />
            </div>
        </div>
    );
}

export default ProductsRaw;