import Image from "next/image";
import { useRouter } from "next/router";
import useSWR from 'swr';

import MainSlider from "./MainSlider";
import SubMainSlider from "./SubMainSlider";
import fetcher from "@/utils/fetcher.utils";
import { useState } from "react";

const Banner = ({ type }) => {
    const router = useRouter();

    const { data: banners, error: bannersError, isValidating } = useSWR(
        `/banners?type=${!type ? 'home_slide' : 'home_block_3_slide'}`,
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        {
            revalidateIfStale: false,
            revalidateOnFocus: false,
            revalidateOnReconnect: false
        }
    )

    if (!banners || bannersError || isValidating) {
        return null
    }

    return (
        <div className="Banner flex lg:inline">
            <div className="hidden lg:inline">
                {!type ? <MainSlider banners={banners} /> : <SubMainSlider banners={banners} />}
            </div>
            <div className="Banner__mobile lg:hidden">
                <div className="Banner__slider flex flex-row gap-2 overflow-scroll w-100">
                    {
                        banners.data.map((banner) => (
                            <div key={banner.id} className="Banner__slider__mobile">
                                <Image src={banner.img} alt="banner" width={0} height={0} sizes="100vw" placeholder="blurDataURL" />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Banner;