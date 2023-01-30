import { useState } from "react";
import { Menu } from "@headlessui/react";

const SortMenu = ({ isRow, setIsRow, setFilterOpen, setIsScroll }) => {
    const [overflow, setOverflow] = useState(false);

    return (
        <div className="SortMenu flex flex-row font-semibold text-[15px] items-center gap-1 justify-between">
            <div className="flex flex-row gap-1 lg:hidden">
                <button
                    className="flex flex-row gap-2 bg-white py-3 px-2 rounded-sm items-center"
                    onClick={() => { setFilterOpen(true); setIsScroll(false) }}>
                    <svg viewBox="0 0 24 24" width={18} height={18} className="fill-none stroke-three"><use xlinkHref="#filter" /></svg>
                    <p>Фильтр</p>
                </button>
                <button onClick={() => setIsRow(!isRow)} className="flex flex-row gap-1 text-[15px] items-center bg-white py-3 px-2 rounded-sm"><svg viewBox="0 0 24 24" width={18} height={18} className="fill-none stroke-three"><use xlinkHref={isRow ? '#menu-row' : '#dashboard'} /></svg><p>{isRow ? 'Список' : 'Плитка'}</p></button>
            </div>
            <Menu as="div" className="relative inline-block text-left lg:hidden">
                <Menu.Button className="flex flex-row items-center text-purpleMain">Популярное <svg viewBox="0 0 24 24" width={24} height={24} className="fill-none stroke-purpleMain"><use xlinkHref="#arr-down" /></svg></Menu.Button>
                <Menu.Items className="bg-white absolute top-10 right-0 rounded-sm py-6 px-8 flex flex-col gap-2">
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                Популярное
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                По новизне
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                По цене (возрастанию)
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                По цене (убыванию)
                            </button>
                        )}
                    </Menu.Item>
                    <Menu.Item>
                        {({ active }) => (
                            <button
                                className={`${active && 'bg-blue-500'}`}
                                href="/account-settings"
                            >
                                По размеру скидки
                            </button>
                        )}
                    </Menu.Item>
                </Menu.Items>
            </Menu>
            <div className="hidden lg:flex flex-row justify-between bg-white w-full rounded-sm p-6">
                <div className="flex gap-5 xl:gap-10">
                    <button>По новизне</button>
                    <button>По популярности</button>
                    <button>По цене</button>
                    <button>По размеру скидки</button>
                </div>
                <div className="flex gap-4">
                    <p>Вид:</p>
                    <div className="flex gap-2">
                        <svg viewBox="0 0 24 24" onClick={() => setIsRow(!isRow)} className={`w-6 h-6 fill-none cursor-pointer ${isRow ? 'stroke-placeholder fill-none' : 'fill-purpleMain stroke-purpleMain'}`}><use xlinkHref="#dashboard" /></svg>
                        <svg viewBox="0 0 24 24" onClick={() => setIsRow(!isRow)} className={`w-6 h-6 fill-none cursor-pointer ${isRow ? 'fill-purpleMain stroke-purpleMain' : 'stroke-placeholder'}`}><use xlinkHref="#menu-row" /></svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortMenu;