import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import Image from "next/image";
import { useEffect, useState } from "react";

const ProductList = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isHover, setIsHover] = useState(false);

    const handleResize = () => {
        if (window.innerWidth < 1024) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }

    useEffect(() => {
        if (window.innerWidth < 1024) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }

        window.addEventListener("resize", handleResize)
    }, [])

    return (
        <div className="ProductList bg-white p-4 rounded-sm w-full grid grid-cols-[45%_55%] gap-2 lg:flex lg:flex-row lg:gap-6">
            {
                isMobile ? (
                    <div className="ProductList__image__swiper max-w-[200px]">
                        <Swiper
                            pagination={true}
                            spaceBetween={30}
                            loop={true}
                            modules={[Pagination]}
                            className="w-full"
                            aria-disabled={true}
                        >
                            <SwiperSlide>
                                {/* <div> */}
                                <Image src={'/images/image 2.png'} alt="Product image" sizes="100vw" width={0} height={0} placeholder="blurDataURL" />
                                {/* </div> */}
                            </SwiperSlide>
                            <SwiperSlide><Image src={'/images/image 2.png'} alt="Product image" sizes="100vw" width={0} height={0} placeholder="blurDataURL" /></SwiperSlide>
                            <SwiperSlide><Image src={'/images/image 2.png'} alt="Product image" sizes="100vw" width={0} height={0} placeholder="blurDataURL" /></SwiperSlide>
                        </Swiper>
                    </div>
                ) : (
                    <div
                        onMouseEnter={() => setIsHover(true)}
                        onMouseLeave={() => setIsHover(false)}
                    >
                        <Image src={`/images/image ${!isHover ? '2' : '4'}.png`} width={0} height={0} sizes="100vw" alt="" className="max-w-[200px]" />
                    </div>
                )
            }
            <div className="flex flex-col gap-4 lg:gap-8 lg:grid lg:grid-cols-[60%_25%] lg:text-[20px] lg:justify-between lg:w-full">
                <div className="flex flex-col justify-between h-full gap-3">
                    <h1>iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</h1>
                    <div>
                        <strong className={`ProductList__monthly text-sm sm:text-[16px] md:text-[20px]`}>300 000 сум <span className={`ProductList__monthly--duration text-xs text-textSecondary md:text-sm`}>x18</span>
                        </strong>
                        <p className="ProductList__price text-xs text-textSecondary line-through font-medium md:text-[14px]">123 456 789 сум</p>
                    </div>
                </div>
                <div className="ProductList__buttons flex items-center lg:flex-col-reverse lg:justify-between lg:items-end">
                    <button className="ProductList__buttons--cart flex flex-row items-center gap-2 bg-purpleMain py-3 px-4 rounded-cart hover:bg-purpleDark transition duration-300">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="white"
                        >
                            <use xlinkHref="#bag"></use>
                        </svg>
                        <p className="hidden lg:flex font-semibold text-white text-[16px] leading-6 whitespace-nowrap"><span className="hidden xl:inline-block">Добавить</span> в коризину</p>
                    </button>
                    <div className="flex flex-row justify-end gap-3 w-full">
                        <button className="ProductList__buttons--like hover:bg-gray-200 rounded-cart h-10 w-10 flex flex-row justify-center items-center">
                            <svg
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill="none"
                                stroke="#828282"
                            >
                                <use xlinkHref="#favorite"></use>
                            </svg>
                        </button>
                        <button className="ProductList__buttons--compare hover:bg-gray-200 rounded-cart h-10 w-10 flex flex-row justify-center items-center">
                            <svg
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                fill="#828282"
                            >
                                <use xlinkHref="#compare"></use>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductList;