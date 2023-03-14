import { useRouter } from 'next/router';
import useSWR from 'swr';

import fetcher from "@/utils/fetcher.utils";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";

import NewsRawTab from "./NewsRowTab";
import Skeleton from 'react-loading-skeleton';
const NewsRow = () => {
    const router = useRouter();
    const { data: publications, error: publicationsError, isValidating } = useSWR(
        ["/publications?type=2&quantity=12", router.locale],
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (!publications || publicationsError || isValidating) {
        return (
            <div className='flex flex-col gap-8 md:gap-10'>
                <Skeleton width={300} height={32} />
                <div className='lg:hidden'><Skeleton height={240} /></div>
                <div className='hidden lg:grid grid-cols-3 gap-4'>
                    {[...Array(3).keys()].map((item) => (
                        <Skeleton key={item} height={240} />
                    ))}
                </div>
            </div>
        )
    }

    return (
        <div className="NewsRow flex flex-col gap-8 md:gap-10">
            <h1 className="text-[20px] font-bold">Новостной блог</h1> {/* lang */}
            <div className="mx-[-20px] lg:mx-0">
                <Swiper
                    spaceBetween={16}
                    slidesPerView={'auto'}
                    loopFillGroupWithBlank={true}
                    modules={[Pagination, Navigation]}
                >
                    {
                        publications.data.map((pub) => (
                            <SwiperSlide key={pub.id}>
                                <NewsRawTab data={pub} />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="NewsRow__mobile flex flex-row flex-nowrap gap-4 overflow-scroll md:hidden px-[20px]">
                    {
                        publications.data.map((pub) => (
                            <div key={pub.id} className="w-[448px] h-[240px]">
                                <NewsRawTab data={pub} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default NewsRow;