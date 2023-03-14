import { useLang } from "@/hooks/useLang";
import { useState } from "react";

const About = ({ body }) => {
    const lang = useLang();
    const [isHidden, setIsHidden] = useState(true);

    return (
        <div className="About p-6 bg-white rounded-sm shadow-main flex flex-col">
            {/* lang */}
            <h1 className="text-purpleMain font-semibold leading-6">Myntra - Интернет магазин цифровой и бытовой техники и электроники</h1>
            <div
                className={`About__content text-[15px] flex flex-col gap-4 ${isHidden ? 'About__content--hidden' : 'About__content--open'}`}
                dangerouslySetInnerHTML={{ __html: body }}
            />
            <button
                className="pt-3 text-purpleMain font-medium w-fit hover:text-purpleDark transition-all duration-150"
                onClick={() => setIsHidden(!isHidden)}
            >{isHidden ? 'Читать далее...' : '...Скрыть'}</button>
        </div >
    );
}

export default About;