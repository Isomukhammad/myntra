import ProductTab from "@/components/Product/ProductTab";
import SortMenu from "@/components/Category/SortMenu";
import { useState, Fragment, useEffect } from "react";
import PaginateButtons from "@/components/Category/PaginateButtons";
import ProductList from "@/components/Product/ProductList";
import { Menu, Transition } from "@headlessui/react";
import FilterMenu from "@/components/Category/FilterMenu";

const Category = () => {
    const [isRow, setIsRow] = useState(false);
    const [filterOpen, setFilterOpen] = useState(false);
    const [isScroll, setIsScroll] = useState(true);

    useEffect(() => {
        if (isScroll) {
            document.body.style.overflow = 'auto'
        } else {
            document.body.style.overflow = 'hidden'
        }
    }, [isScroll])

    return (
        <>
            <div className="Category flex flex-col gap-4 mt-6 mb-20">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-4 items-end">
                        <h1 className="font-semibold text-[24px] leading-[32px]">Электроника</h1>
                        <span className="font-medium text-[14px] leading-[25px] text-textSecondary">21 475 товаров</span>
                    </div>
                    <div className="Category__brands flex flex-row items-center overflow-y-hidden overflow-x-scroll gap-2 mx-[-34px] px-[34px] lg:mt-2">
                        <button className="flex flex-row items-center bg-error py-[11.5px] px-4 rounded-sm gap-2 hover:bg-red-600 transition duration-300">
                            <svg
                                viewBox="0 0 24 24"
                                width={24}
                                height={24}
                                className="fill-none stroke-white"
                            >
                                <use xlinkHref="#label"></use>
                            </svg>
                            <p className="whitespace-nowrap font-medium font-sm text-white">Большие скидки</p>
                        </button>
                        <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Xiaomi</button>
                        <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Apple</button>
                        <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Samsung</button>
                        <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Huawei</button>
                        <button className="py-[11.5px] px-4 border rounded-sm hover:bg-gray-200 transition duration-300">Honor</button>
                    </div>
                </div>

                <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[35%_65%] xl:grid-cols-[25%_75%] lg:mt-6">
                    <div className="c row-start-1 row-end-3">
                        <FilterMenu open={filterOpen} setOpen={setFilterOpen} setIsScroll={setIsScroll} />
                    </div>
                    <SortMenu isRow={isRow} setIsRow={setIsRow} setFilterOpen={setFilterOpen} setIsScroll={setIsScroll} />
                    <div className="lg:col-start-2 flex flex-col gap-6">
                        <div className={`${isRow ? 'flex flex-row gap-4 flex-wrap' : 'grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'}`}>
                            {!isRow ? (
                                <>
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                    <ProductTab />
                                </>
                            ) : (
                                <>
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                    <ProductList />
                                </>
                            )
                            }
                        </div>
                        <div>
                            <button className="py-4 font-medium text-center border rounded-sm border-greyFive w-full hover:border-three duration-300">Показать ещё</button>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            {/* <p className="hidden md:flex flex-row items-center gap-2">Показывать по 24 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-black" ><use xlinkHref="#arr-down" /></svg></p> */}
                            <Menu as="div" className="Category__product-number hidden relative md:inline-block text-left lg:flex">
                                <Menu.Button className="flex flex-row items-center gap-2">Показывать по 24 <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-black" ><use xlinkHref="#arr-down" /></svg></Menu.Button>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="bg-white absolute top-10 right-0 rounded-sm py-6 px-8 flex flex-col gap-2 whitespace-nowrap left-0 w-fit">
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active && 'text-purpleMain font-medium'}`}
                                                    href="/account-settings"
                                                >
                                                    Показывать по 8
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active && 's text-purpleMain font-medium'}`}
                                                    href="/account-settings"
                                                >
                                                    Показывать по 12
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active && 'text-purpleMain font-medium'}`}
                                                    href="/account-settings"
                                                >
                                                    Показывать по 24
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({ active }) => (
                                                <button
                                                    className={`${active && 'text-purpleMain font-medium'}`}
                                                    href="/account-settings"
                                                >
                                                    Показывать по 32
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                            <PaginateButtons />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Category;