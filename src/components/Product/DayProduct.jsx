import Image from "next/image";

const DailyProduct = () => {
    return (
        <div className="Day-product">
            <div className="flex flex-col gap-5">
                <div className="grid grid-cols-[1.5fr_2fr] gap-4 items-center md:grid-cols-[1fr_3fr] md:grid-rows-[auto_auto]">
                    <Image
                        src="/images/image 2.png"
                        alt="Изображение продукта дня"
                        sizes="100vw"
                        width={0}
                        height={0}
                        className="max-w-[160px] md:row-start-1 md:row-end-3"
                    />

                    <div className="flex flex-col gap-2 md:row-start-1 md:row-end-2">
                        <div className="flex flex-col gap-2">
                            <p className="bg-red-500 text-white text-sm font-semibold w-fit py-[4px] px-[12px] rounded-full">-20 %</p>
                            <div className="lg:flex lg:flex-row lg:items-end lg:gap-4">
                                <p className="font-semibold text-sm sm:text-[20px] leading-[24px]">18 250 000 сум</p>
                                <p className="font-medium text-xs sm:text-sm line-through text-textSecondary">18 250 000 сум</p>
                            </div>
                        </div>
                        <p className="text-xs sm:text-sm">Смартфон iPhone 13 Pro Max 128GB Graphite (MLLP3RK/A)</p>
                    </div>

                    <button className="bg-purpleMain flex items-center justify-center gap-1 text-white py-[8px] px-[16px] rounded-sm w-full hover:bg-purpleDark transition duration-150 col-start-1 col-end-3 md:row-start-2 md:row-end-3 md:col-start-2 md:col-end-3">
                        <svg viewBox="0 0 24 24" width={20} height={20} className="stroke-white fill-none">
                            <use xlinkHref="#bag"></use>
                        </svg>
                        <p className="text-xs sm:text-sm">В корзину</p>
                    </button>
                </div>

            </div>
        </div>
    );
}

export default DailyProduct;