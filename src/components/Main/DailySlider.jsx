import useSWR from 'swr';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper";
import DailyProduct from "../Product/DailyProduct";
import { useRouter } from 'next/router';
import fetcher from '@/utils/fetcher.utils';

const pagination = {
    el: ".Daily-slider__pagination",
    clickable: true,
    renderBullet: (index, className) => {
        return '<span class="' + className + ' h-[4px] w-[40px]"></span>';
    }
}

const DailySlider = () => {
    const router = useRouter();

    const { data: products, error: productsError, isValidating } = useSWR(
        ['/products?page=1&is_promotion=1&quantity=3', router.locale],
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (!products || isValidating) {
        return null;
    }

    return (
        <div className="Daily-slider bg-white rounded-sm p-[24px] pb-[64px] md:pb-[24px]">
            <h1 className="font-semibold text-[20px] mb-8">Товар дня</h1> {/* lang */}

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
                {products.data.map((product) => (
                    <SwiperSlide key={product.id}><DailyProduct product={product} /></SwiperSlide>
                ))}
            </Swiper>

            <div className="Daily-slider__pagination"></div>
        </div >
    );
}

export default DailySlider;