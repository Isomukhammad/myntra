import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'

const LangDrop = () => {
    return (
        <div className="text-right hidden lg:flex">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="w-full justify-center rounded-md bg-transparent bg-opacity-20 px-4 py-2 text-sm font-medium text-white flex flex-row items-center gap-1 border border-[#E0E0E01F]">
                        <span className='font-semibold text-sm'>RU</span>
                        <svg
                            viewBox="0 0 16 17"
                            width={16}
                            height={17}
                        >
                            <use xlinkHref="#flag-russia"></use>
                        </svg>
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
                    <Menu.Items className="absolute right-0 mt-2 w-[122px] origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-[1] flex flex-col gap-1">
                        <div className="py-3 px-2 flex flex-col gap-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'bg-gray-200' : 'text-gray-900'
                                        } flex flex-row gap-1 py-4 items-center w-full justify-center rounded-cart transition duration-300`}>
                                        <p className='text-black'>RU</p>
                                        <svg
                                            viewBox="0 0 16 17"
                                            width={16}
                                            height={17}
                                        >
                                            <use xlinkHref="#flag-russia"></use>
                                        </svg>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button className={`${active ? 'bg-gray-200' : 'text-gray-900'
                                        } flex flex-row gap-1 py-4 items-center w-full justify-center rounded-cart transition duration-300`}>
                                        <p className='text-black'>UZ</p>
                                        <svg
                                            viewBox="0 0 24 24"
                                            width={16}
                                            height={17}
                                        >
                                            <use xlinkHref="#flag-uzbekistan"></use>
                                        </svg>
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

export default LangDrop;