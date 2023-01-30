import NewsRow from "@/components/News/NewsRow";
import ProductSlider from "@/components/Product/ProductSlider";
import ProductsRaw from "@/components/Product/ProductsRaw";
import Image from "next/image";

const Product = () => {
    return (
        <div className="Product mt-8 mb-20 flex flex-col gap-12">
            <div className="lg:grid lg:grid-cols-[75%_25%] gap-4">
                <div className="flex flex-col gap-4 bg-white pt-8 pb-10 px-6 rounded-sm lg:col-start-1 lg:col-end-2">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-lg font-semibold">Ноутбук HUAWEI MateBook D 15 BOD-WDI9 8+256 Mystic Silver / BOD-WDI9 8+256</h1>
                        <div className="flex flex-row items-center justify-between gap-4">
                            <div className="flex flew-row gap-2">
                                <button className="p-2 hover:bg-gray-200  rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary"><use xlinkHref="#share-outline" /></svg></button>
                                <button className="p-2 hover:bg-gray-200  rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary"><use xlinkHref="#favorite" /></svg></button>
                                <button className="p-2 hover:bg-gray-200 rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary"><use xlinkHref="#compare" /></svg></button>
                            </div>
                            <div className="text-sm text-placeholder">Код: 5811965165</div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-14 items-center xl:grid xl:grid-cols-[44%_56%] mx-[-24px] w-full">
                        <ProductSlider />
                        <div className="Product__сharacteristic flex flex-col gap-10 lg:col-start-2 lg:col-end-3 w-full px-[24px]">
                            <h1 className="text-5 font-semibold">Характеристики</h1>
                            <div className="Product__сharacteristic__category flex flex-col gap-10">
                                <div className="flex flex-col gap-6">
                                    <h4 className="font-medium">Общие характеристики</h4>
                                    <div className="flex flex-col gap-4">
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                    </div>
                                </div>
                                <div className="Product__сharacteristic__category flex flex-col gap-6">
                                    <h4 className="font-medium">Дисплей</h4>
                                    <div className="flex flex-col gap-4">
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                        <p><span className="text-textSecondary">Гарантийный срок</span><span className="Product__сharacteristic__category__dot"></span><span>1 год</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="lg:row-start-1 lg:col-start-2 lg:col-end-3 lg:row-end-3">
                    <div className="flex flex-col rounded-sm sticky top-0 gap-2">
                        <div className="hidden lg:flex flex-col gap-8 bg-white py-10 px-6 rounded-sm">
                            <div className="">
                                <h1 className="text-error font-bold text-2xl">333 720 000 сум/мес <span className="font-semibold text-placeholder text-base ml-1">x 18 мес</span></h1>
                                <h2 className="font-semibold text-primary text-lg">29 483 000 сум</h2>
                                <h3 className="font-medium line-through text-placeholder">32 540 000 сум</h3>
                            </div>
                            <div className="flex flex-col gap-2">
                                <button className="w-full p-4 rounded-sm bg-purpleMain text-white font-medium hover:bg-purpleDark transition duration-300 font-roboto">Добавить в коризину</button>
                                <button className="w-full p-4 rounded-sm bg-primaryBg text-purpleMain font-medium font-roboto hover:bg-purpleMain hover:text-white transition duration-300">Купить в один клик</button>
                            </div>
                        </div>
                        <Image src="/images/Frame 2891.png" alt="" width={0} height={0} sizes="100vw" className="rounded-sm" />
                    </div>
                </div>
                <div className="flex flex-col gap-10 bg-white rounded-sm p-6  lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                    <h1 className="font-semibold text-5">О товаре</h1>
                    <div className="flex flex-col gap-5">
                        <p>Ноутбук Huawei MateBook BOD-WDI9 с диагональю экрана 15,6&quot; оснащен IPS-матрицей. Он обеспечивает качественное изображение с разрешением 1920 x 1080 Пикс. За графику отвечает контроллер Iris Graphics. Устройство работает на базе четырехъядерного процессора от Intel с частотой 2,4 ГГц — Core i3. Установлена ОС Windows 11 «Домашняя». Конфигурацией предусмотрены оперативная память объемом 8 Гб и жесткий диск SSD — 256 Гб. Беспроводное подключение доступно за счет модулей Bluetooth и Wi-Fi. В металлический корпус встроены разъемы HDMI, 3,5 мм, USB 2.0 типа A, 3.0 типа C и 3.2 типа A. Также интегрированы два динамика, два микрофона и датчик отпечатков пальцев. Габариты равны 16,9 х 357,8 х 229,9 мм, а вес — 1,63 кг.</p>
                        <p>Ноутбук Huawei MateBook D 15 8+256GB Mystic Silver - ультрасовременная модель, оборудованная IPS-экраном в узкой рамке шириной 5,3 мм. Достигаемый угол обзора - 178°. Устройство способно раскрываться практически на 180°, что позволяет использовать его с еще большим удобством. Ноутбук легкий и компактный - он весит всего 1,53 кг.</p>
                        <p>Процессор Intel Core 11 поколения повышает скорость работы системы и общую производительность модели. Видеокарта качественно обрабатывает изображения, что важно как для работы, так и для развлечения. Оригинальная система охлаждения оптимизирует воздушные потоки и эффективно отводит тепло, благодаря чему устройство Huawei MateBook D 15 8+256GB работает быстро и без перерывов. Объем накопителя - 256 Гб, оперативная память - 8 Гб.</p>
                        <p>Встроенная батарея очень мощная - 56 Вт*ч. Этого достаточно для функционирования без дополнительного заряда в течение почти 14 часов. Функция «мультискрин» объединяет ноутбук Huawei MateBook D 15 8+256GB и смартфон в одну систему с возможностью обмена файлами. В комплекте поставляется зарядка мощностью 65 Вт.</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-12">
                <ProductsRaw title="С этим товаром часто покупают" />
                <ProductsRaw title="Вам может понравиться" />
                <NewsRow />
            </div>
            <div className="py-4 px-[34px] grid grid-cols-[55%_45%] items-center justify-between fixed bottom-[69px] bg-white w-full left-0 rounded-tl-sm rounded-tr-sm shadow-[4px_0px_12px_rgba(0,0,0,0.1)] z-[2] lg:hidden">
                <div className="">
                    <p className="font-semibold">4 990 325 сум <span className="text-textSecondary font-semibold text-xs">x18 мес</span></p>
                    <p className="line-through font-medium text-xs text-textSecondary">123 456 789 сум</p>
                </div>
                <button className="py-3 h-fit whitespace-nowrap bg-purpleMain text-white font-roboto rounded-sm">В коризину</button>
            </div>
        </div >
    );
}

export default Product;