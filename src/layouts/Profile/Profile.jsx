import PagePath from "@/components/Page/PagePath";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import AuthExit from "./AuthExit";

const ProfileLayout = ({ children }) => {
    const { pathname } = useRouter();
    const [exitOpen, setExitOpen] = useState(false);

    const handleExitOpen = () => {
        setExitOpen(!exitOpen);
    }

    return (
        <div className="mt-10 mb-20 flex flex-col gap-8">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `Мой профиль`
                    }
                ]}
            />

            <div className="flex flex-col gap-4 lg:grid lg:grid-cols-[16.6%_83.3%]">
                <div className="lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-2">{children}</div>
                <div className="bg-white p-6 font-semibold  rounded-sm lg:col-start-1 flex flex-col gap-1 lg:col-end-2 lg:row-start-1 lg:row-end-1 h-fit">
                    <Link href='/user/profile' className={`flex flex-row items-center gap-2 py-4 px-3 rounded-sm hover:bg-primaryBg transition duration-300 ${pathname === "/user/profile" ? 'bg-primaryBg' : ''}`}>
                        <svg viewBox="0 0 24 24" width={24} height={24} stroke="#333333" fill="none"><use xlinkHref="#user" /></svg>
                        <p>Мой профиль</p>
                    </Link>
                    <Link href='/user/orders' className={`flex flex-row items-center gap-2 py-4 px-3 rounded-sm hover:bg-primaryBg transition duration-300 ${pathname === "/user/orders" ? 'bg-primaryBg' : ''}`}>
                        <svg viewBox="0 0 24 24" width={24} height={24} stroke="#333333" fill="none"><use xlinkHref="#box_alt" /></svg>
                        <p>Мои заказы</p>
                    </Link>
                    <Link href='/user/settings' className={`flex flex-row items-center gap-2 py-4 px-3 rounded-sm hover:bg-primaryBg transition duration-300 ${pathname === "/user/settings" ? 'bg-primaryBg' : ''}`}>
                        <svg viewBox="0 0 24 24" width={24} height={24} stroke="#333333" fill="none"><use xlinkHref="#filter" /></svg>
                        <p>Настройки</p>
                    </Link>
                    <button onClick={handleExitOpen} className="group rounded-sm flex flex-row items-center gap-2 py-4 px-3 hover:bg-[#ff010117] trnasition-all duration-300">
                        <svg viewBox="0 0 24 24" width={24} height={24} stroke="#333333" fill="none" className="group-hover:stroke-red-700 trnasition-all duration-300"><use xlinkHref="#out" /></svg>
                        <p className="group-hover:text-red-700 trnasition-all duration-300">Выйти</p>
                    </button>
                </div>
            </div>
            <AuthExit open={exitOpen} setOpen={handleExitOpen} />
        </div >
    )
}

export default ProfileLayout;