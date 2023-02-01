import EmptyPage from "@/components/EmptyPage";
import InputCheckbox from "@/components/Inputs/InputCheckbox";
import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";
import Image from "next/image";

const Cart = () => {
    return (
        <div className="mt-10 mb-20">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `Корзина`
                    }
                ]}
            />
            {/* <EmptyPage
                image="/images/empty cart.png"
                title="В корзине пока ничего нет"
                text="Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы увидеть выбранные товары"
                text2="Акции, специальные предложения и обзоры на главной странице помогут вам найти подходящие товары"
            /> */}
            <div className="mt-8 flex flex-col gap-4 lg:grid lg:grid-cols-[75%_25%]">
                <div className="flex flex-col gap-4">
                    <div className="py-6 px-4 bg-white rounded-sm flex flex-row items-center justify-between w-full">
                        <div className="font-medium text-[14spx] min-[360px]:text-base">
                            <InputCheckbox name="Выбрать все" />
                        </div>
                        <div className="font-medium text-textSecondary text-[14px] min-[360px]:text-base">
                            <button className="hover:text-red-600 transition duration-300">Удалить</button>
                        </div>
                    </div>

                    <div className="flex flex-col bg-white rounded-sm py-6 px-4 gap-6 lg:col-start-1 lg:col-end-2 lg:px-10 lg:py-10">
                        <div className="flex flex-col gap-[14px] pb-8 border-b border-b-bg lg:flex-row lg:items-center justify-between">
                            <div className="flex flex-row items-center lg:gap-2 xl:gap-8">
                                <InputCheckbox />
                                <Image src="/images/image 2.png" alt="" width={0} height={0} sizes="100vw" className="max-w-[80px] min-[360px]:max-w-[120px]" />
                                <div className="flex flex-col gap-2 min-[360px]:gap-4 max-w-[408px]">
                                    <h2 className="text-sm lg:text-base">iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</h2>

                                    <div>
                                        <div>
                                            <p className="font-semibold text-sm min-[360px]:text-[15px] lg:text-xl">5 390 325 сум <span className="text-xs text-textSecondary lg:text-[15px]">x18 мес</span></p>
                                        </div>
                                        <p className="font-medium text-xs text-textSecondary line-through lg:text-sm">123 456 789 сум</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center lg:gap-5 xl:gap-20">
                                <div className="flex flex-row gap-1 min-[360px]:gap-4">
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#trash" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#favorite" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary stroke-none cursor-pointer"><use xlinkHref="#compare" /></svg>
                                    </button>
                                </div>
                                <div className="flex flex-row rounded-cart items-center gap-1">
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-placeholder"><use xlinkHref="#minus" /></svg>
                                    </button>
                                    <p className="w-[16px] text-center min-[360px]:w-8">1</p>
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-three"><use xlinkHref="#plus" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[14px] pb-8 border-b border-b-bg lg:flex-row lg:items-center justify-between">
                            <div className="flex flex-row items-center lg:gap-2 xl:gap-8">
                                <InputCheckbox />
                                <Image src="/images/image 2.png" alt="" width={0} height={0} sizes="100vw" className="max-w-[80px] min-[360px]:max-w-[120px]" />
                                <div className="flex flex-col gap-2 min-[360px]:gap-4 max-w-[408px]">
                                    <h2 className="text-sm lg:text-base">iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</h2>

                                    <div>
                                        <div>
                                            <p className="font-semibold text-sm min-[360px]:text-[15px] lg:text-xl">5 390 325 сум <span className="text-xs text-textSecondary lg:text-[15px]">x18 мес</span></p>
                                        </div>
                                        <p className="font-medium text-xs text-textSecondary line-through lg:text-sm">123 456 789 сум</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center lg:gap-5 xl:gap-20">
                                <div className="flex flex-row gap-1 min-[360px]:gap-4">
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#trash" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#favorite" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary stroke-none cursor-pointer"><use xlinkHref="#compare" /></svg>
                                    </button>
                                </div>
                                <div className="flex flex-row rounded-cart items-center gap-1">
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-placeholder"><use xlinkHref="#minus" /></svg>
                                    </button>
                                    <p className="w-[16px] text-center min-[360px]:w-8">1</p>
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-three"><use xlinkHref="#plus" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-[14px] pb-8 lg:flex-row lg:items-center justify-between">
                            <div className="flex flex-row items-center lg:gap-2 xl:gap-8">
                                <InputCheckbox />
                                <Image src="/images/image 2.png" alt="" width={0} height={0} sizes="100vw" className="max-w-[80px] min-[360px]:max-w-[120px]" />
                                <div className="flex flex-col gap-2 min-[360px]:gap-4 max-w-[408px]">
                                    <h2 className="text-sm lg:text-base">iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</h2>

                                    <div>
                                        <div>
                                            <p className="font-semibold text-sm min-[360px]:text-[15px] lg:text-xl">5 390 325 сум <span className="text-xs text-textSecondary lg:text-[15px]">x18 мес</span></p>
                                        </div>
                                        <p className="font-medium text-xs text-textSecondary line-through lg:text-sm">123 456 789 сум</p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between items-center lg:gap-5 xl:gap-20">
                                <div className="flex flex-row gap-1 min-[360px]:gap-4">
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#trash" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary cursor-pointer"><use xlinkHref="#favorite" /></svg>
                                    </button>
                                    <button className="p-2 hover:bg-gray-100 rounded-cart transition duration-200">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary stroke-none cursor-pointer"><use xlinkHref="#compare" /></svg>
                                    </button>
                                </div>
                                <div className="flex flex-row rounded-cart items-center gap-1">
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-placeholder"><use xlinkHref="#minus" /></svg>
                                    </button>
                                    <p className="w-[16px] text-center min-[360px]:w-8">1</p>
                                    <button className="p-[9px] rounded-cart bg-gray-100 hover:bg-gray-200 transition duration-200">
                                        <svg viewBox="0 0 14 14" className="w-[14px] h-[14px] stroke-three"><use xlinkHref="#plus" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div>
                    <div className="px-4 py-8 bg-white flex flex-col rounded-sm gap-10 lg:px-6">
                        <div className="flex flex-row gap-3 items-center">
                            <div>
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-red stroke-white"><use xlinkHref="#info_duotone_line" /></svg>
                            </div>
                            <p className="text-textSecondary font-medium">Выберите хотя бы один товар чтобы оформи заказ</p>
                        </div>
                        <div className="flex flex-col gap-[30px]">
                            <h1 className="text-xl font-semibold">Ваша корзина</h1>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <p className="font-medium text-textSecondary">Цена в месяц</p>
                                        <p className="font-medium">1 850 000 сум</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <p className="font-medium text-textSecondary">Количтво месяцев</p>
                                        <p className="font-medium">12</p>
                                    </div>
                                    <div className="flex flex-row items-center justify-between w-full">
                                        <p className="font-medium text-textSecondary">Доставка</p>
                                        <p className="font-medium">0 сум</p>
                                    </div>
                                    <div><hr className="border-b border-b-gray7" /></div>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <p className="font-semibold text-lg">Итого</p>
                                    <p className="font-bold">22 200 000 сум</p>
                                </div>
                            </div>
                        </div>
                        <button className="font-roboto font-semibold text-white py-4 rounded-sm bg-purpleMain w-full disabled:bg-gray7 disabled:text-placeholder hover:bg-purpleDark transition duration-300">Оформить заказ</button>
                    </div>
                </div>
            </div>

            <div className="mt-8">
                <ProductsRaw title="С этим товаром часто покупают" />
            </div>
        </div>

    );
}

export default Cart;