import { nextAxios } from "@/utils/axios.utils";
import Image from "next/image";

import { SEO, ProductSlider, ProductsRaw, NewsRow } from '@/components/index';

const Product = ({ product }) => {
    return (
        <>
            <SEO title={product.seo_title} description={product.meta_description} keywords={product.meta_keywords} />
            <div className="Product mt-8 mb-20 flex flex-col gap-12">
                <div className="lg:grid lg:grid-cols-[75%_25%] gap-4">
                    <div className="flex flex-col gap-4 bg-white pt-8 pb-10 px-6 rounded-sm lg:col-start-1 lg:col-end-2">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg font-semibold">{product.h1_name}</h1>
                            <div className="flex flex-row items-center justify-between gap-4">
                                <div className="flex flew-row gap-2">
                                    <button className="p-2 hover:bg-gray-200  rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary"><use xlinkHref="#share-outline" /></svg></button>
                                    <button className="p-2 hover:bg-gray-200  rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-none stroke-textSecondary"><use xlinkHref="#favorite" /></svg></button>
                                    <button className="p-2 hover:bg-gray-200 rounded-sm"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-textSecondary"><use xlinkHref="#compare" /></svg></button>
                                </div>
                                <div className="text-sm text-placeholder">Код: {product.id}</div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-14 xl:grid xl:grid-cols-[3fr_6fr] lg:mx-[-24px] w-full xl:px-6">
                            <div className="mx-[-24px] lg:mx-0">
                                <ProductSlider />
                            </div>
                            <div className="Product__сharacteristic flex flex-col gap-10 lg:col-start-2 lg:col-end-3 w-full lg:px-[24px]">
                                <h1 className="text-[20px] font-semibold lg:text-[24px]">Характеристики</h1>
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
                                    <h2 className="font-semibold text-primary text-lg">{product.current_price_formatted}</h2>
                                    {product.current_price_formatted !== product.old_price_formatted ? <h3 className="font-medium line-through text-placeholder">{product.old_price_formatted}</h3> : nul}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <button className="w-full p-4 rounded-sm bg-purpleMain text-white font-medium hover:bg-purpleDark transition duration-300 font-roboto">Добавить в корзину</button>
                                    <button className="w-full p-4 rounded-sm bg-primaryBg text-purpleMain font-medium font-roboto hover:bg-purpleMain hover:text-white transition duration-300">Купить в один клик</button>
                                </div>
                            </div>
                            <Image src="/images/Frame 2891.png" alt="" width={0} height={0} sizes="100vw" className="rounded-sm" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-10 bg-white rounded-sm p-6  lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3">
                        <h1 className="font-semibold text-5">О товаре</h1>
                        <div className="flex flex-col gap-5" dangerouslySetInnerHTML={{ __html: product.body }} />
                    </div>
                </div>
                <div className="flex flex-col gap-12">
                    <ProductsRaw title="С этим товаром часто покупают" link={`/products/${product?.id}/similar?quantity=6`} />
                    {/* <ProductsRaw title="Вам может понравиться" /> */}
                    <NewsRow />
                </div>
                <div className="py-4 px-[20px] grid grid-cols-[55%_45%] items-center justify-between fixed bottom-[69px] bg-white w-full left-0 rounded-tl-sm rounded-tr-sm shadow-[4px_0px_12px_rgba(0,0,0,0.1)] z-[2] lg:hidden">
                    <div className="">
                        <p className="font-semibold">4 990 325 сум <span className="text-textSecondary font-semibold text-xs">x18 мес</span></p>
                        <p className="line-through font-medium text-xs text-textSecondary">{product.current_price_formatted}</p>
                    </div>
                    <button className="py-3 h-fit whitespace-nowrap bg-purpleMain text-white font-roboto rounded-sm">В коризину</button>
                </div>
            </div >
        </>
    );
}

export const getServerSideProps = async ({ params, locale }) => {
    const product = await nextAxios.get(`/products/${params.product.split('-')[0]}`, {
        headers: { 'Accept-Language': locale }
    })
        .then(res => res.data.data)
        .catch(err => console.error(err))

    if (!product) {
        return {
            notFound: true
        }
    }
    return {
        props: {
            product
        }
    }
}

export default Product;