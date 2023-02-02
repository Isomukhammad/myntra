import { useState } from 'react'
import Image from "next/image";
import Link from "next/link";

import Login from "../Auth/Login";
import Register from "../Auth/Register";
import ResetPassword from "../Auth/Reset";
import Verification from "../Auth/Verification";
import CountryDrop from './CountryDrop';
import LangDrop from './LangDrop';
import Menu from './Menu';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [loginOpen, setLoginOpen] = useState(false);
    const [registerOpen, setRegisterOpen] = useState(false);
    const [resetOpen, setResetOpen] = useState(false);
    const [verifyOpen, setVerifyOpen] = useState(false);

    const handleLoginOpen = () => {
        setLoginOpen(!loginOpen);
    }

    const handleRegisterOpen = () => {
        setLoginOpen(false);
        setTimeout(() => { setRegisterOpen(true); }, 250);
    }

    const handleGoToLogin = () => {
        setRegisterOpen(false);
        setTimeout(() => { setLoginOpen(true); }, 250);
    }

    const hanldeRegisterClose = () => {
        setRegisterOpen(false);
    }

    const handleResetOpen = () => {
        setLoginOpen(!loginOpen);
        setTimeout(() => { setResetOpen(!resetOpen); }, 250)
    }

    const handleResetClose = () => {
        setResetOpen(false);
    }

    const handleVerifyOpen = () => {
        setRegisterOpen(false);
        setTimeout(() => { setVerifyOpen(true); }, 250)
    }

    const handleVerifyClose = () => {
        setVerifyOpen(false);
    }

    return (
        <div className="Header relative">
            <div className="Header__upper">
                <div className="Header__upper__wrapper 2xl:container 2xl:mx-auto">
                    <div className="Header__upper__categories">
                        <CountryDrop />
                        <div className="Header__upper__link">Магазин</div>
                        <div className="Header__upper__link">Доставка</div>
                        <div className="Header__upper__link">Акции</div>
                    </div>
                    <Link href='/' className='Header__upper__logo'>
                        <Image src={'/images/header-logo.png'} alt="Logo" sizes="100vw" width={0} height={0} placeholder="blurDataURL" />
                    </Link>
                    <div className="Header__upper__info">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            fill="none"
                            stroke="none"
                            className="Header__phone-logo"
                        >
                            <use xlinkHref="#phone"></use>
                        </svg>
                        <div className="Header__phone-number">+998 90 555-66-88</div>
                        <div className='Header__language'>
                            <LangDrop />
                        </div>
                    </div>
                </div>
            </div>
            <div className="Header__lower w-full 2xl:container mx-auto">
                <div className="Header__lower__column-1">
                    <Link href='/' className="hidden lg:inline-block">
                        <Image
                            src="/images/header-logo.png"
                            alt="logo"
                            sizes="100vw"
                            width={0}
                            height={0}
                            className="Header__lower__logo max-w-[144px]"
                            placeholder="blurDataURL"
                        />
                    </Link>
                    <button className="Header__lower__menu" onClick={() => setMenuOpen(!menuOpen)}>
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            stroke="white"
                        >
                            <use xlinkHref={menuOpen ? '#x' : '#menu'}></use>
                        </svg>
                        <p>Каталог<span>товаров</span></p>
                    </button>

                    <div className="Header__lower__search">
                        <input type="text" placeholder="Поиск ..." />
                        <button>
                            <svg viewBox="0 0 24 24" width={24} height={24}>
                                <use xlinkHref="#search"></use>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="Header__lower__column-2">
                    <Link href='/cart' className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#basket"></use>
                        </svg>
                        <p>Корзина</p>
                    </Link>
                    <Link href='/comparison' className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-three"
                        >
                            <use xlinkHref="#compare"></use>
                        </svg>
                        <p>Сравнение</p>
                    </Link>
                    <Link href='/favorites' className="Header__lower__category">
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#favorite"></use>
                        </svg>
                        <p>Избранное</p>
                    </Link>
                    <button className="Header__lower__category" onClick={handleLoginOpen}>
                        <svg
                            viewBox="0 0 24 24"
                            width={24}
                            height={24}
                            className="fill-none stroke-three"
                        >
                            <use xlinkHref="#user"></use>
                        </svg>
                        <p>Профиль</p>
                    </button>
                </div>
            </div>
            <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <Login open={loginOpen} setOpen={handleLoginOpen} setRegisterOpen={handleRegisterOpen} setResetOpen={handleResetOpen} />
            <Register
                open={registerOpen}
                setOpen={handleRegisterOpen}
                setClose={hanldeRegisterClose}
                openLogin={handleGoToLogin}
                openVerify={handleVerifyOpen}
            />
            <ResetPassword open={resetOpen} setOpen={handleResetClose} />
            <Verification open={verifyOpen} setClose={handleVerifyClose} />
        </div >
    );
}

export default Header;