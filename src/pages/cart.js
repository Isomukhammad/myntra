import EmptyPage from "@/components/EmptyPage";
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
            <EmptyPage
                image="/images/empty cart.png"
                title="В корзине пока ничего нет"
                text="Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы увидеть выбранные товары"
                text2="Акции, специальные предложения и обзоры на главной странице помогут вам найти подходящие товары"
            />
            {/* <div className="mt-8 p-6 w-full bg-white rounded-sm flex flex-col items-center lg:p-0 lg:pt-10 lg:pb-20 ">
                <div className="flex flex-col items-center gap-10 lg:max-w-[588px]">
                    <Image src="/images/empty cart.png" alt="" width={0} height={0} sizes="100vw" className="max-w-[240px]" />
                    <div className="flex flex-col gap-10 items-center">
                        <div className="flex flex-col gap-6 text-center">
                            <h1 className="text-xl font-semibold">В корзине пока ничего нет</h1>
                            <div className="flex flex-col gap-6 text-textSecondary font-medium">
                                <p>Если вы наполняли корзину при прошлом визите, авторизуйтесь, чтобы увидеть выбранные товары</p>
                                <p>Акции, специальные предложения и обзоры на главной странице помогут вам найти подходящие товары</p>
                            </div>
                        </div>
                        <button className="py-4 bg-purpleMain font-roboto font-semibold text-white rounded-sm hover:bg-purpleDark transition duration-300 w-full lg:max-w-[342px]">Вернуться на главную</button>
                    </div>
                </div>
            </div> */}
            <div className="mt-8">
                <ProductsRaw title="С этим товаром часто покупают" />
            </div>
        </div>

    );
}

export default Cart;