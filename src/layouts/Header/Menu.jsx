import { Dialog, Disclosure, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { useMediaQuery } from "react-responsive";

const Menu = ({ menuOpen, setMenuOpen }) => {
    const isDesktop = useMediaQuery({
        query: '(min-width: 1024px)'
    })

    return (
        <>
            <Transition appear show={menuOpen} as={Fragment}>
                <Dialog as="div" className="absolute top-[160px] lg:top-[151px] w-full h-full left-0 z-[10] border-t border-greyFive" onClose={() => setMenuOpen(true)}>
                    <div className="overflow-y-auto h-full">
                        <div className="h-full">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full h-full pb-[70px] lg:pb-[151px] min-h-full overflow-y-auto transform bg-white text-left align-middle shadow-xl transition-all overflow-x-hidden">
                                    {
                                        !isDesktop ? (
                                            <>
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Телевизоры и цифровое ТВ</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Смартфоны и гаджеты</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Ноутбуки и компьюетеры</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Телевизоры и цифровое ТВ</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Смартфоны и гаджеты</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Ноутбуки и компьюетеры</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Телевизоры и цифровое ТВ</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Смартфоны и гаджеты</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                                <Disclosure>
                                                    {
                                                        ({ open }) => (
                                                            <>
                                                                <Disclosure.Button className="Filter-option flex w-full justify-between rounded-lg font-semibold p-8 border-t border-greyFive">
                                                                    <span>Ноутбуки и компьюетеры</span>
                                                                    <svg viewBox="0 0 24 24" className={`w-6 h-6 fill-none transition-all duration-300 stroke-three ${!open ? `rotate-180 transform'` : ''}`}><use xlinkHref="#arr-up" /></svg>
                                                                </Disclosure.Button>
                                                                <Transition
                                                                    enter="transition-all duration-300 ease-in-out"
                                                                    enterFrom="transform scale-95 opacity-0"
                                                                    enterTo="transform scale-100 opacity-1"
                                                                    leave="transition-all duration-75 ease-out"
                                                                    leaveFrom="transform scale-100 opacity-100"
                                                                    leaveTo="transform scale-95 opacity-0"
                                                                >
                                                                    <Disclosure.Panel className="Filter-options__inputs flex flex-col gap-7 px-12 mb-8 text-gray2">
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Смартфоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Кнопочные телефоны</p>
                                                                        <p className="hover:text-black cursor-pointer transition-all duration-150">Умные часы и браслеты</p>
                                                                    </Disclosure.Panel>
                                                                </Transition>
                                                            </>
                                                        )
                                                    }
                                                </Disclosure >
                                            </>
                                        ) : (
                                            <div className="grid grid-cols-[25%_75%] h-full 2xl:container 2xl:mx-auto relative">
                                                <div className="bg-bg absolute w-full h-full left-[-1000px]" />
                                                <div className="relative h-full py-6 flex flex-col overflow-y-auto">
                                                    <div className="font-semibold text-[16px] hover:bg-white py-4 px-6 cursor-pointer hover:border-r-2 border-purpleMain transition duration-300">Смартфоны и гаджеты</div>
                                                    <div className="font-semibold text-[16px] hover:bg-white py-4 px-6 cursor-pointer hover:border-r-2 border-purpleMain transition duration-300">Смартфоны и гаджеты</div>
                                                </div>
                                                <div className="relative bg-white overflow-y-auto">
                                                    <div className="grid grid-cols-7 w-full items-center justify-between py-6">
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/mi.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] self-center grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" loading="lazy" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/hp.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/philips.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/apple.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/mi.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/philips.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                        <Link href='/' className="flex flex-row items-center justify-center">
                                                            <Image src='/images/hp.png' alt="" sizes="100vw" width={0} height={0} className="max-h-[56px] w-auto max-w-[100px] grayscale opacity-50 transition duration-300 hover:opacity-100 hover:grayscale-0" />
                                                        </Link>
                                                    </div>
                                                    <div className="grid grid-cols-3 justify-between px-14 py-16 gap-y-20 gap-x-32">
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="flex flex-col gap-6">
                                                            <Link href='#' className="font-semibold text-lg">Смартфоны и гаджеты</Link>
                                                            <div className="flex flex-col gap-4">
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <Link href='#' className="text-gray2 hover:text-three hover:font-semibold">Смартфоны</Link>
                                                                <button className="group w-fit text-purpleMain flex flex-row items-center group gap-[6px]">
                                                                    <p className="group-hover:text-purpleDark">Показать ещё</p>
                                                                    <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-purpleMain group-hover:text-purpleDark group-hover:font-99bold"><use xlinkHref="#arr-down" /></svg>
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}

export default Menu;