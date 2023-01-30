import ProfileLayout from "@/layouts/Profile/Profile";

const Profile = () => {
    return (
        <>
            <ProfileLayout>
                <div className="flex flex-col gap-4">
                    <div className="bg-white rounded-sm py-10 px-4 flex flex-col gap-10 lg:px-10">
                        <h1 className="text-xl font-semibold">Персональные данные</h1>
                        <div className="w-full flex flex-col items-center gap-2 lg:max-w-[96px]">
                            <div className="flex flex-col items-center justify-center w-[96px] h-[96px] bg-[#3C96FF] text-white rounded-full">
                                <p className="text-4xl">ЭТ</p>
                            </div>
                            <div className="w-full text-center">
                                <label htmlFor="image-upload" className="cursor-pointer text-purpleMain font-medium">Изменить</label>
                                <input id="image-upload" type="file" title="" className="hidden" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-2 lg:max-w-[784px]">
                            <div className="relative">
                                <input type="text" id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                <label htmlFor="name" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Имя и фамилия</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="phone-number" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                <label htmlFor="phone-number" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Номер телефона</label>
                            </div>
                            <div className="relative">
                                <input type="text" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                <label htmlFor="email" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">E-Mail</label>
                            </div>
                            <div className="relative">
                                <input type="date" id="email" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                <label htmlFor="email" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Дата рождения</label>
                            </div>
                        </div>
                    </div>
                    <div className="py-10 px-4 bg-white rounded-sm lg:px-10">
                        <div className="flex flex-col gap-10 lg:max-w-[400px]">
                            <h1 className="text-xl font-semibold">Изменение пароля</h1>
                            <div className="flex flex-col gap-6">
                                <div className="relative">
                                    <input type="text" id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    <label htmlFor="name" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Старый пароль</label>
                                </div>
                                <div className="relative">
                                    <input type="text" id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    <label htmlFor="name" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Новый пароль</label>
                                </div>
                                <div className="relative">
                                    <input type="text" id="name" className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border-1 border-greyFive appearance-none focus:outline-none focus:ring-0 focus:border-black peer" placeholder=" " />
                                    <label htmlFor="name" className="absolute font-medium text-[15px] text-textSecondary duration-300 transform -translate-y-4 top-1 z-1 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-100 peer-focus:-translate-y-4 left-1">Подтвердите новый пароль</label>
                                </div>
                                <button className="bg-purpleMain py-4 rounded-sm text-white font-semibold font-roboto hover:bg-purpleDark transition duration-300">Сохранить изменения</button>
                            </div>
                        </div>
                    </div>
                </div>
            </ProfileLayout >
        </>
    );
}

export default Profile;