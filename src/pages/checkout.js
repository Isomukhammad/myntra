import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";
import Image from "next/image";

const Checkout = () => {
    return (
        <div className="pt-10 pb-20">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `Оформление заказа`
                    }
                ]}
            />
            <div className="mt-8 lg:grid lg:grid-cols-[75%_25%] lg:gap-4">
                <div className="flex flex-col gap-4">
                    <div className="p-6 flex flex-col gap-10 bg-white rounded-sm lg:p-10">
                        <h1 className="font-semibold text-lg">Оформление заказа</h1>
                        <div className="flex flex-col gap-10">
                            <h2 className="font-semibold">Персональные данные</h2>
                            <div className="flex flex-col gap-4 lg:max-w-[824px]">
                                <div className="relative lg:grid lg:grid-cols-2 lg:gap-4">
                                    <input type="text" id="phone-number" className="block px-[18px] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-gray-300 focus:ring-0 focus:border-transparent peer" placeholder=" " />
                                    <label htmlFor="phone-number" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-3 cursor-text">Телефон</label>
                                </div>
                                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-2">
                                    <div className="relative">
                                        <input type="text" id="name" className="block px-[18px] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-gray-300 focus:ring-0 focus:border-transparent peer" placeholder=" " />
                                        <label htmlFor="name" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-3 cursor-text">Имя</label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="surname" className="block px-[18px] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-gray-300 focus:ring-0 focus:border-transparent peer" placeholder=" " />
                                        <label htmlFor="surname" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-3 cursor-text">Фамилия</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-10 bg-white rounded-sm lg:p-10 lg:grid lg:grid-cols-2">
                        <h1 className="font-semibold text-lg">Ваш заказ</h1>
                        <div className="flex flex-col gap-6 lg:col-start-1 lg:col-end-3">
                            <div className="flex flex-row gap-8 items-center">
                                <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} className="max-w-[96px] lg:max-w-[120px]" />
                                <div className="flex flex-col gap-4">
                                    <p className="text-xs min-[360px]:text-base">iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</p>
                                    <div>
                                        <p className="font-semibold text-xs min-[360px]:text-[15px]">5 390 325 сум <span className="text-[10px] min-[360px]text-sm text-textSecondary ml-1">x18 мес</span></p>
                                        <p className="text-xs min-[360px]:text-sm font-medium line-through text-textSecondary">123 456 789 сум</p>
                                    </div>
                                </div>
                            </div>
                            <hr className="border-b border-b-bg lg:hidden" />
                            <div className="flex flex-row gap-8 items-center">
                                <Image src="/images/image 4.png" alt="" sizes="100vw" width={0} height={0} className="max-w-[96px] lg:max-w-[120px]" />
                                <div className="flex flex-col gap-4">
                                    <p className="text-xs min-[360px]:text-base">iPad Pro 12.9-inch M2/128GB Silver/Wi-Fi + Cellular/2022</p>
                                    <div>
                                        <p className="font-semibold text-xs min-[360px]:text-[15px]">5 390 325 сум <span className="text-[10px] min-[360px]text-sm text-textSecondary ml-1">x18 мес</span></p>
                                        <p className="text-xs min-[360px]:text-sm font-medium line-through text-textSecondary">123 456 789 сум</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-row lg:justify-end lg:items-center lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2 lg:self-end">
                            <button className="flex flex-row items-center text-purpleMain group w-fit self-center">
                                <p className="group-hover:text-purpleDark transition-all duration-300 font-semibold">Изменить</p>
                                <svg viewBox="0 0 24 24" className="w-6 h-6 fill-purpleMain group-hover:fill-purpleDark transition-all duration-300"><use xlinkHref="#arrow-right" /></svg>
                            </button>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-10 bg-white rounded-sm lg:p-10">
                        <h1 className="text-lg font-semibold">Способ оплаты</h1>
                        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:max-w-[840px] lg:gap-x-10">
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="cash" type="radio" value="" name="payment" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="cash" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer">Оплата наличными</label>
                            </div>
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="click/payment" type="radio" value="" name="payment" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="click/payment" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer">Оплата через Payme или Click</label>
                            </div>
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="humo/uzcart" type="radio" value="" name="payment" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="humo/uzcart" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer">Оплата картой (Humo и Uzcard)</label>
                            </div>
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="card" type="radio" value="" name="payment" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="card" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer">Оплата картой при получении</label>
                            </div>
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="installment" type="radio" value="" name="payment" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="installment" className="w-full py-4 ml-4 text-sm font-medium cursor-pointer">Оформить рассрочку</label>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 flex flex-col gap-10 bg-white rounded-sm lg:p-10">
                        <h1 className="text-lg font-semibold">Способ получения</h1>
                        <div className="flex flex-col gap-5 lg:max-w-[840px] lg:grid lg:grid-cols-2 lg:gap-x-10">
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                <input id="bordered-radio-1" type="radio" value="" name="transportation" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="bordered-radio-1" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer">Доставка</label>
                            </div>
                            <div className="flex items-center pl-4 border border-greyFive rounded-sm cursor-pointer">
                                <input id="bordered-radio-2" type="radio" value="" name="transportation" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                <label for="bordered-radio-2" className="w-full py-4 ml-4 text-sm font-medium cursor-pointer peer-checked:border-blue-600">Самовывоз из магазина</label>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:max-w-[840px]">
                            <h1 className="font-medium text-textSecondary px-2">Ваш город</h1>
                            <div className="flex flex-col gap-5 lg:max-w-[840px] lg:grid lg:grid-cols-2 lg:gap-x-10">
                                <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                    <input id="city-1" type="radio" value="" name="city" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                    <label for="city-1" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer flex flex-col gap-1">
                                        <p className="text-[15px] font-medium">Ташкент</p>
                                        <p className="text-textSecondary font-medium">Доставкой Myntra.uz</p>
                                    </label>
                                </div>
                                <div className="flex items-center pl-4 border border-greyFive rounded-sm  cursor-pointer">
                                    <input id="city-2" type="radio" value="" name="city" className="w-[18px] h-[18px] text-purpleMain bg-transparent border-greyFive focus:ring-0 focus:ring-transparent cursor-pointer" />
                                    <label for="city-2" className="w-full py-4 ml-4 text-sm font-medium  cursor-pointer flex flex-col gap-1">
                                        <p className="text-[15px] font-medium">Другой город</p>
                                        <p className="text-textSecondary font-medium">Доставкой службой EXPRESSLOG</p>
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:max-w-[840px]">
                            <h1 className="font-medium text-textSecondary px-2">Укажите адрес доставки</h1>
                            <div className="flex flex-col gap-5 lg:max-w-[840px]">
                                <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:gap-x-10">
                                    <div className="relative">
                                        <label htmlFor="countries" className="absolute top-[-9px] left-3 text-[12px] font-medium bg-white text-textSecondary">Регион / Область</label>
                                        <select id="countries" class="bg-white border border-gray-300 text-medium text-[15px] text-sm rounded-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 block w-full p-4">
                                            <option selected>город Ташкент</option>
                                            <option value="US">Ташкентская область</option>
                                            <option value="CA">Ферганская область</option>
                                            <option value="FR">Андижанская область</option>
                                            <option value="DE">Наманганская область</option>
                                        </select>
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="countries" className="absolute top-[-9px] left-3 text-[12px] font-medium bg-white text-textSecondary">Город / район</label>
                                        <select id="countries" class="bg-white border border-gray-300 text-medium text-[15px] text-sm rounded-sm focus:ring-2 focus:ring-gray-300 focus:border-gray-300 block w-full p-4">
                                            <option selected>город Ташкент</option>
                                            <option value="US">Ташкентская область</option>
                                            <option value="CA">Ферганская область</option>
                                            <option value="FR">Андижанская область</option>
                                            <option value="DE">Наманганская область</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[75%_20%] lg:gap-x-10">
                                    <div className="relative">
                                        <input type="text" id="adress" className="block px-[18px] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-gray-300 focus:ring-0 focus:border-transparent peer" placeholder=" " />
                                        <label htmlFor="adress" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-3 cursor-text flex flex-row gap-1">
                                            <p>Адрес</p>
                                            <p className="hidden md:flex">(Например, Юнусубад 12 квартал)</p>
                                        </label>
                                    </div>
                                    <div className="relative">
                                        <input type="text" id="floor" className="block px-[18px] pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-gray-300 focus:border-transparent focus:ring-0 peer" placeholder=" " />
                                        <label htmlFor="floor" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-3 cursor-text">Этаж (если есть)</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hidden lg:flex">
                    <div className="py-8 px-6 flex flex-col gap-10 bg-white rounded-sm w-full h-fit">
                        <div className="flex flex-col gap-[30px]">
                            <h1 className="text-xl font-semibold">Ваша корзина</h1>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-[18px]">
                                    <div className="flex flex-row justify-between">
                                        <p className="font-medium text-[15px] text-textSecondary">Цена в месяц</p>
                                        <p className="font-medium">1 850 000 сум</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className="font-medium text-[15px] text-textSecondary">Количество месяцев</p>
                                        <p className="font-medium">12 мес</p>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <p className="font-medium text-[15px] text-textSecondary">Доставка</p>
                                        <p className="font-medium">0 сум</p>
                                    </div>
                                </div>
                                <hr className="border-b border-b-gray7" />
                                <div className="flex flex-row justify-between">
                                    <p className="font-semibold text-[18px]">Итого</p>
                                    <p className="font-bold text-[18px]">22 200 000 сум</p>
                                </div>
                            </div>
                        </div>
                        <button className="font-roboto font-semibold text-white bg-purpleMain py-4 rounded-sm hover:bg-purpleDark transition duration-300">Оформить заказ</button>
                    </div>
                </div>
            </div>
            <div className="mt-10">
                <ProductsRaw title="Вам может понравиться" />
            </div>
        </div>
    );
}

export default Checkout;