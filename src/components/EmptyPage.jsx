import Image from "next/image";

const EmptyPage = ({ image, title, text, text2 }) => {
    return (
        <div className="mt-8 p-6 w-full bg-white rounded-sm flex flex-col items-center lg:p-0 lg:pt-10 lg:pb-20 ">
            <div className="flex flex-col items-center gap-10 lg:max-w-[588px]">
                <Image src={image} alt="" width={0} height={0} sizes="100vw" className="max-w-[240px] md:max-w-[320px]" />
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex flex-col gap-6 text-center">
                        <h1 className="text-xl font-semibold">{title}</h1>
                        <div className="flex flex-col gap-6 text-textSecondary font-medium">
                            <p>{text}</p>
                            {
                                text2 ? <p>{text2}</p> : null
                            }
                        </div>
                    </div>
                    <button className="py-4 bg-purpleMain font-roboto font-semibold text-white rounded-sm hover:bg-purpleDark transition duration-300 w-full lg:max-w-[342px]">Вернуться на главную</button>
                </div>
            </div>
        </div>
    );
}

export default EmptyPage;