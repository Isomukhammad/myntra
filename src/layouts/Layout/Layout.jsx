import Sprites from "@/utils/sprites";
import Footer from "../Footer/Footer";

import Header from "../Header/Header";
import MobileMenu from "../MobileMenu/MobileMenu";

const Layout = ({ children }) => {
    return (
        <div className={`Layout__container font-mont sans-serif layout`}>
            {/* Sprites */}
            <Sprites />

            {/* Header */}
            <Header />

            {/* Body */}
            <div className="Layout__wrapper">
                <div className="Layout__children 2xl:container 2xl:mx-auto">
                    {children}
                </div>
            </div>

            {/* Footer */}
            <Footer />

            <MobileMenu />
        </div>
    );
}

export default Layout;