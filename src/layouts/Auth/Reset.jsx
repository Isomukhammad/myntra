import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect } from 'react'

const ResetPassword = ({ open, setOpen }) => {
    useEffect(() => {
        if (open) {
            document.getElementsByTagName('html')[0].style.setProperty('overlflow', 'hidden', 'important');
        } else {
            document.getElementsByTagName('html')[0].style.setProperty('overlflow', 'scroll', 'important');
        }
    }, [open])

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
                                <Dialog.Panel className="relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all flex flex-col gap-16">
                                    <div className='flex flex-col items-center'>
                                        <h1 className='text-center font-semibold text-xl'>???????????????????????????? ????????????</h1>
                                        <p>?????????????? ???????? ?????????????????????? ??????????, ???? ?????????????? ???? ?????????????? ?????? ????????????????????????????</p>
                                    </div>
                                    <div className='flex flex-col gap-8'>
                                        <div className="relative">
                                            <input type="text" id="phone-number" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                            <label htmlFor="phone-number" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-80 peer-focus:-translate-y-4 left-1">?????? E-Mail</label>
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-6 items-center'>
                                        <button className='text-white py-4 rounded-sm font-semibold bg-purpleMain w-full hover:bg-purpleDark transition duration-300'>??????????????????</button>
                                    </div>
                                    <button onClick={setOpen} className="absolute top-[42px] right-10">
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

export default ResetPassword;