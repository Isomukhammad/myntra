import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";
import Image from "next/image";

const AboutUs = () => {
    return (
        <div className="AboutPage flex flex-col pt-10 pb-20">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `О компании`
                    }
                ]}
            />
            <div className="AboutPage__description rounded-sm p-6 bg-white flex flex-col gap-10 pt-10 pb-20 mt-8">
                <h1 className="font-semibold text-[18px] lg:text-[24px]">О компании “Myntra”</h1>
                <div className="AboutPage__content font-medium flex flex-col gap-10 lg:flex-row lg:flex-wrap lg:pl-14  lg:gap-6 2xl:pl-28 2xl:pr-60 lg:justify-between">
                    <div className="flex flex-col gap-6 lg:w-[37%]">
                        <div>
                            <p>«Ситилинк» – одна из крупнейших сетей магазинов электроники и бытовой техники, входит в ГК Merlion. На рынке с 2008 года. </p>
                            <p>В инфраструктуре компании интернет-магазин citilink.ru, более 650 магазинов и пунктов выдачи заказов в 360 городах России.</p>
                        </div>

                        <p>В продуктовом портфеле порядка 800 мировых брендов и 70 000 наименований компьютерной, цифровой, бытовой техники, других категорий товаров, включая садовую, автомобильную электронику, офисную мебель, канцелярию.</p>

                        <p>В портфеле услуг – сборка компьютеров, установка техники, подборка расходных материалов, электронные ключи и подписи, защита покупки и имущества, а также иные цифровые услуги.</p>
                    </div>
                    <Image src="/images/image 7.png" alt="" width={0} height={0} sizes="100vw" placeholder="blurDataURL" className="rounded-sm lg:w-[55%] h-fit" />
                    <div className="flex flex-col gap-6 lg:w-[40%]">
                        <p>Магазины «Ситилинк» оборудованы терминалами для самостоятельного оформления заказов, кассами оплаты и окнами выдачи товаров. Сall-центр компании работает 7 дней в неделю и оказывает круглосуточную поддержку покупателям. Количество визитов на www.citilink.ru в месяц — более 35 миллионов человек;
                        </p>

                        <div>
                            <p>«СИТИЛИНК» занимает лидирующие позиции на рынке электронной торговли:</p>
                            <p>В 2015 году - 2-ое место в рейтинге журнала Forbes «TOP-20 онлайн-магазинов России».</p>
                            <p>В 2015 году - 4-ое место в рейтинге журнала Forbes «20 самых дорогих компаний Рунета»</p>
                            <p>В 2016 году - 8-ое место в рейтинге журнала Forbes «20 самых дорогих компаний Рунета»В 2016 году - 3-е место по объему онлайн-продаж в рейтинге Data Insight и Ruward E-commerce Index TOP-100</p>
                            <p>В 2017 году - 2-е место по объему онлайн-продаж в рейтинге Data Insight и Ruward E-commerce Index TOP-100</p>
                            <p>В 2019 году - 1-е место в исследовании Data Insight «Онлайн-рынок бытовой техники и электроники» (период: июль 2018-июнь 2019).</p>
                            <p>В 2019 году — 7-е место в рейтинге «20 самых дорогих компаний Рунета» по версии Forbes. Единственный онлайн-ретейлер в рейтинге, который специализируется на торговле электроникой и бытовой техникой.</p>
                            <p>В 2020 году – 2-е место в рейтинге Data Insight TOP-100 крупнейших магазинов России E-Commerce Index</p>
                            <p>В 2020 году – 8-е место в рейтинге Forbes «10 главных продавцов Рунета»</p>
                            <p>В 2012, 2013, 2014, 2015, 2016, 2018, 2019 годах «Ситилинк» удостоен звания «Привлекательный работодатель» по итогам исследования портала Superjob.ru среди работающих в России компаний.</p>
                        </div>
                    </div>
                    <Image src="/images/image 8.png" alt="" width={0} height={0} sizes="100vw" placeholder="blurDataURL" className="rounded-sm lg:w-[55%] h-fit" />
                </div>
            </div>
            <div className="mt-10">
                <ProductsRaw title="Самые просматриваемые" />
            </div>
        </div>
    );
}

export default AboutUs;