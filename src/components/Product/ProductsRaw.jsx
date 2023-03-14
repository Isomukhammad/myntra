import ProductTab from "./ProductTab";
import useSWR from 'swr'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { useRouter } from "next/router";
import fetcher from "@/utils/fetcher.utils";
import Skeleton from "react-loading-skeleton";

const ProductsRaw = ({ title = '', time = '', link = '' }) => {
    const router = useRouter();

    const { data: products, error: productsError, isValidating } = useSWR(
        [link, router.locale],
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (!products || isValidating || productsError) {
        return (
            <div className="flex flex-col gap-8 lg:gap-10">
                <Skeleton height={32} width={300} />
                <div className="lg:hidden grid grid-cols-2 gap-4">
                    {[...Array(2).keys()].map((item) => (
                        <Skeleton key={item} height={350} />
                    ))}
                </div>
                <div className="hidden lg:grid grid-cols-5 gap-4">
                    {[...Array(5).keys()].map((item) => (
                        <Skeleton key={item} height={350} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="ProductsRaw flex flex-col gap-8 mx-[-20px]">
            <div className="flex flex-row justify-between items-center px-[20px]">
                <div className="ProductsRaw__headline flex flex-row gap-4 items-center">
                    <h1 className="text-[20px] font-bold lg:text-[28px]">{title}</h1>
                    {time ? <div className="ProductsRaw__headline__time">
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

            <div className="ProductsRaw__slider relative lg:flex 2xl:px-[20px]">
                <Swiper
                    spaceBetween={16}
                    navigation={true}
                    slidesPerView={'auto'}
                    loopFillGroupWithBlank={true}
                    modules={[Pagination, Navigation]}
                >
                    {
                        products.data.map((item) => (
                            <SwiperSlide key={item.id}>
                                <ProductTab product={item} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default ProductsRaw;