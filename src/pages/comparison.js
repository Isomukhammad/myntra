import FilterOption from "@/components/Category/FilterOption";
import EmptyPage from "@/components/EmptyPage/EmptyPage";
import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";
import Image from "next/image";

const Comparison = () => {
    return (
        <div className="mt-10 mb-20">
            <div className="ml-[14px]">
                <PagePath
                    paths={[
                        {
                            "url": "/",
                            "name": "Главная"
                        }, {
                            "url": "",
                            "name": `Сравнение`
                        }
                    ]}
                />
            </div>
            {/* <EmptyPage
                image="/images/empty comparison.png"
                title="В списке сравнения пока ничего нет"
                text="Если у вас были товары для сравнения при прошлом визите, авторизуйтесь, чтобы увидеть их"
            /> */}

            <div className="hidden md:flex bg-white rounded-sm w-full p-6 flex-row gap-20 mt-8">
                <div className="flex items-center pl-4 rounded-sm  cursor-pointer flex-row gap-3">
                    <input id="all" type="radio" value="" name="city" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                    <label for="all" className="w-full text-sm font-medium  cursor-pointer">
                        <p className="text-[15px] font-medium">Все характеристики</p>
                    </label>
                </div>
                <div className="flex items-center pl-4 rounded-sm  cursor-pointer flex-row gap-3">
                    <input id="difference" type="radio" value="" name="city" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                    <label for="difference" className="w-full text-sm font-medium  cursor-pointer">
                        <p className="text-[15px] font-medium">Только различия</p>
                    </label>
                </div>
            </div>

            <div className="py-8 px-4 bg-white rounded-sm overflow-x-scroll w-full mt-8 lg:px-6 lg:py-6 md:mt-4">
                <div className="flex flex-row gap-10">
                    <div className="min-w-[180px] w-[180px] flex flex-col gap-[14px] lg:min-w-[252px] lg:w-[252px] lg:gap-4 lg:py-4 relative">
                        <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} className="px-[10px] lg:px-[24px]" />
                        <div className="flex flex-col gap-[18px] lg:gap-[15px] lg:px-[12px]">
                            <div>
                                <p className="font-semibold lg:text-lg">5 390 325 сум <span className="text-sm font-semibold text-textSecondary lg:ml-1">x18 мес</span></p>
                                <p className="line-through text-textSecondary font-medium text-xs">123 456 789 сум</p>
                            </div>
                            <p className="text-sm">Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)</p>
                        </div>
                        <button className="absolute top-0 right-0 cursor-pointer group lg:top-[7px] lg:right-[7px]">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-textSecondary fill-none group-hover:stroke-red-600 transition-all duration-300"><use xlinkHref="#trash" /></svg>
                        </button>
                    </div>
                    <div className="min-w-[180px] w-[180px] flex flex-col gap-[14px] lg:min-w-[252px] lg:w-[252px] lg:gap-4 lg:py-4 relative">
                        <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} className="px-[10px] lg:px-[24px]" />
                        <div className="flex flex-col gap-[18px] lg:gap-[15px] lg:px-[12px]">
                            <div>
                                <p className="font-semibold lg:text-lg">5 390 325 сум <span className="text-sm font-semibold text-textSecondary lg:ml-1">x18 мес</span></p>
                                <p className="line-through text-textSecondary font-medium text-xs">123 456 789 сум</p>
                            </div>
                            <p className="text-sm">Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)</p>
                        </div>
                        <button className="absolute top-0 right-0 cursor-pointer group lg:top-[7px] lg:right-[7px]">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-textSecondary fill-none group-hover:stroke-red-600 transition-all duration-300"><use xlinkHref="#trash" /></svg>
                        </button>
                    </div>
                    <div className="min-w-[180px] w-[180px] flex flex-col gap-[14px] lg:min-w-[252px] lg:w-[252px] lg:gap-4 lg:py-4 relative">
                        <Image src="/images/image 2.png" alt="" sizes="100vw" width={0} height={0} className="px-[10px] lg:px-[24px]" />
                        <div className="flex flex-col gap-[18px] lg:gap-[15px] lg:px-[12px]">
                            <div>
                                <p className="font-semibold lg:text-lg">5 390 325 сум <span className="text-sm font-semibold text-textSecondary lg:ml-1">x18 мес</span></p>
                                <p className="line-through text-textSecondary font-medium text-xs">123 456 789 сум</p>
                            </div>
                            <p className="text-sm">Планшет Apple iPad 10.2 Wi-Fi 64GB Space Grey (MK2K3)</p>
                        </div>
                        <button className="absolute top-0 right-0 cursor-pointer group lg:top-[7px] lg:right-[7px]">
                            <svg viewBox="0 0 24 24" className="w-6 h-6 stroke-textSecondary fill-none group-hover:stroke-red-600 transition-all duration-300"><use xlinkHref="#trash" /></svg>
                        </button>
                    </div>
                    <div className="pr-4 lg:pr-6">
                        <div className="h-full min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px] border border-dashed border-greyFive flex flex-col justify-center items-center gap-[18px] rounded-cart cursor-pointer hover:border-gray-500 transition duration-300 group">
                            <div><svg viewBox="0 0 14 14" className="w-8 h-8 stroke-textSecondary group-hover:stroke-gray-500 transition duration-300"><use xlinkHref="#plus" /></svg></div>
                            <div className="text-textSecondary font-medium text-center group-hover:text-gray-500 transition duration-300 w-[126px]">Добавить к сравнению</div>
                        </div>
                    </div>
                </div>

                <div className="mt-10 w-full flex flex-col gap-8">
                    <FilterOption title="Общие характеристики" open={true} full={false}>
                        <div className="flex flex-col mt-4">
                            <div className="flex flex-row gap-10 py-6 border-b border-b-gray6 lg:hover:bg-gray7 lg:px-6">
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row gap-10 py-6 border-b border-b-gray6 lg:hover:bg-gray7 lg:px-6">
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                                <div className="min-w-[180px] w-[180px] lg:min-w-[252px] lg:w-[252px]">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-sm font-semibold">Тип</h1>
                                        <p className="text-[13px]">смартфон</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FilterOption>
                    <FilterOption title="Другие функции" open={false} full={false}>
                    </FilterOption>
                    <FilterOption title="Доп. информация" open={false} full={false}>
                    </FilterOption>
                    <FilterOption title="Дополнительно" open={false} full={false}>
                    </FilterOption>
                </div>
            </div>

            <div className="mt-10">
                <ProductsRaw title="Самые просматриваемые" />
            </div>
        </div>
    );
}

export default Comparison;