import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
import NewsRawTab from "./NewsRowTab";

const NewsRow = () => {
    return (
        <div className="NewsRow flex flex-col gap-8 md:gap-10">
            <h1 className="text-[20px] font-bold">Новостной блог</h1>
            <div className="mx-[-34px] lg:mx-0">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    loopFillGroupWithBlank={true}
                    modules={[Pagination, Navigation]}
                >
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                    <SwiperSlide><NewsRawTab /></SwiperSlide>
                </Swiper>
                <div className="NewsRow__mobile flex flex-row flex-nowrap gap-4 overflow-scroll md:hidden px-[34px]">
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                    <div className="w-[448px] h-[240px]">
                        <NewsRawTab />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsRow;