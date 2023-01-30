import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

const AuthExit = ({ open, setOpen }) => {
    let [isOpen, setIsOpen] = useState(true)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="relative w-full max-w-[520px] transform overflow-hidden rounded-2xl bg-white py-20 px-6 lg:px-12 text-left align-middle shadow-xl transition-all flex flex-col gap-6">
                                    <div className='flex flex-col gap-6'>
                                        <h1 className='text-xl font-semibold text-center'>Вы уверены что хотите выйти?</h1>
                                        <p className='text-center font-semibold text-lg text-textSecondary'>Мы больше не сможем определять доступность товаров на складею у вас исчезнет рекомендации</p>
                                    </div>
                                    <div className='flex flex-row items-center justify-center w-full'>
                                        <div className='w-[90%] flex flex-col md:grid md:grid-cols-2 gap-[22px]'>
                                            <button className='b bg-primaryBg py-4 rounded-sm w-full font-roboto font-semibold text-purpleMain hover:bg-purpleMain hover:text-white transition duration-300'>Выйти</button>
                                            <button onClick={setOpen} className='b bg-purpleMain py-4 rounded-sm w-full font-roboto font-semibold text-white hover:bg-purpleDark transition duration-300'>Остаться</button>
                                        </div>
                                    </div>
                                    <button onClick={setOpen} className="absolute top-6 right-6">
                                        <svg viewBox='0 0 24 24' width={24} height={24} className='stroke-placeholder'><use xlinkHref='#x' /></svg>
                                    </button>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}

export default AuthExit;