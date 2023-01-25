import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";


const ProductTab = ({ type }) => {
    return (
        <div className={`ProductTab rounded-sm bg-white px-4 md:p-6 pt-6 pb-4 md:pb-6 cursor-pointer text-sm gap-4 ${!type ? 'flex flex-col' : 'grid grid-cols-[38%_62%] items-center'}`}>
            <div className="ProductTab__image md:p-6">
                <Image src={'/images/image 4.png'} alt="Product image" sizes="100vw" width={0} height={0} placeholder="blurDataURL" />
            </div>
            <div className="flex flex-col gap-4">
                <h1>Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)</h1>
                <div>
                    <strong className={`ProductTab__monthly text-sm sm:text-[16px] md:text-[20px] ${type ? 'text-[16px]' : null}`}>300 000 сум <span className={`ProductTab__monthly--duration text-xs text-textSecondary md:text-sm ${type ? 'text-sm' : null}`}>x18</span>
                    </strong>
                    <p className="ProductTab__price text-xs text-textSecondary line-through font-medium md:text-[16px]">123 456 789 сум</p>
                </div>
                <div className="ProductTab__buttons">
                    <button className="ProductTab__buttons--cart">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="white"
                        >
                            <use xlinkHref="#bag"></use>
                        </svg>
                    </button>
                    <button className="ProductTab__buttons--like">
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
                    <button className="ProductTab__buttons--compare">
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
    );
}

export default ProductTab;