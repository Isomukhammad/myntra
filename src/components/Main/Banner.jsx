import Image from "next/image";
import MainSlider from "./MainSlider";
import SubMainSlider from "./SubMainSlider";

const Banner = ({ type }) => {
    return (
        <div className="Banner flex lg:inline">
            <div className="hidden lg:inline">
                {!type ? <MainSlider /> : <SubMainSlider />}
            </div>
            <div className="Banner__mobile lg:hidden">
                <div className="Banner__slider flex flex-row gap-2 overflow-scroll w-100">
                    <div className="Banner__slider__mobile">
                        <Image src="/images/image 1.png" alt="banner" width={0} height={0} sizes="100vw" placeholder="blurDataURL" />
                    </div>
                    <div className="Banner__slider__mobile">
                        <Image src="/images/image 1-1.png" alt="banner" width={0} height={0} sizes="100vw" placeholder="blurDataURL" />
                    </div>
                    <div className="Banner__slider__mobile">
                        <Image src="/images/image 1.png" alt="banner" width={0} height={0} sizes="100vw" placeholder="blurDataURL" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;