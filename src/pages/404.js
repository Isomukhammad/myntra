import PagePath from "@/components/Page/PagePath";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
    return (
        <div className="pt-8 pb-10 flex flex-col gap-8">
            <PagePath
                paths={[
                    {
                        "url": "/",
                        "name": "Главная"
                    }, {
                        "url": "",
                        "name": `404 Error`
                    }
                ]}
            />

            <div className="p-6 bg-white rounded-sm flex flex-row items-center justify-center lg:pt-10 lg:pb-40">
                <div className="max-w-[600px]">
                    <Image src="/images/404 Error.png" alt="" sizes="100vw" width={0} height={0} className="px-9" />
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-6 text-center">
                            <h1 className="font-semibold text-[20px] lg:text-[32px]">Похоже страница удалена или перемещена по новому адресу</h1>
                            <p className="font-medium text-textSecondary">Попробуйте проверить корректность ссылки или
                                просто вернитесь на главную</p>
                        </div>
                        <Link href="/" className="bg-purpleMain w-full py-4 font-semibold rounded-sm text-white hover:bg-purpleDark transition-all duration-300 text-center">Вернуться на главную</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;