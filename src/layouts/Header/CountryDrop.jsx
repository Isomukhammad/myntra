import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image';
import { Fragment, useEffect, useRef, useState } from 'react'

const CountryDrop = () => {
    return (
        <div className="text-right flex">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-2 text-sm font-medium text-white flex flex-row items-center gap-1">
                        <svg viewBox="0 0 24 24" height={24} width={24} className="fill-placeholder lg:fill-white"><use xlinkHref="#pin" /> </svg>
                        <span className='hidden lg:flex'>Ташкент</span>
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute mt-2 w-[320px] origin-top-right divide-y rounded-sm bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[2] flex flex-col gap-[14px] py-6 px-8">
                        <div className="relative flex flex-row justify-between border-none">
                            <div className='flex flex-col gap-2 text-three'>
                                <h1 className='font-semibold text-xl'>Выбор города</h1>
                                <p className='text-sm text-textSecondary'>Всего 13 городов</p>
                            </div>
                            <Menu.Item className="absolute top-0 right-[-4px]">
                                <button>
                                    <svg viewBox='0 0 24 24' className='w-6 h-6 stroke-placeholder'><use xlinkHref='#x' /></svg>
                                </button>
                            </Menu.Item>
                        </div>
                        <hr className='border-b border-b-gray6' />
                        <div className="grid grid-cols-[auto_auto] md:grid-cols-[auto_auto_auto] justify-between gap-y-4 border-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'text-purpleMain' : 'text-textSecondary'
                                        } rounded-cart transition duration-300 font-normal`}>
                                        <p>Ташкент</p>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default CountryDrop;