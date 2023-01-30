import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import VerificationInput from 'react-verification-input'

const Verification = ({ open, setClose }) => {
    // let [isOpen, setIsOpen] = useState(true)

    // function closeModal() {
    //     setIsOpen(false)
    // }

    // function openModal() {
    //     setIsOpen(true)
    // }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setClose}>
                    {/* if duration changed, timer function in Header component also should be changed*/}
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
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all flex flex-col gap-16">
                                    <div className='flex flex-col items-center gap-6 text-center'>
                                        <h1 className='text-center font-semibold text-xl'>Введите код</h1>
                                        <p className='text-[15px] font-inter'>Мы отправили код подтверждения<br /> на номер 998 97 123-45-67</p>
                                    </div>
                                    <div className='Verification flex flex-col items-center'>
                                        <VerificationInput />
                                    </div>
                                    <div className='flex flex-col items-center'>
                                        <button className='text-purpleMain hover:text-purpleDark transition duration-300 text-center w-fit'>Получить новый код</button>
                                    </div>
                                    <button onClick={setClose} className="absolute top-[42px] right-10">
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

export default Verification;