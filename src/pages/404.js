import EmptyPage from "@/components/EmptyPage/EmptyPage";
import PagePath from "@/components/Page/PagePath";
import ProductsRaw from "@/components/Product/ProductsRaw";
import { useLang } from "@/hooks/useLang";
import Image from "next/image";
import Link from "next/link";

const Error = () => {
    const lang = useLang();
    return (
        <div className="pt-8 pb-10 flex flex-col">
            <PagePath
                paths={[
                    {
                        "url": "",
                        "name": `404 Error`
                    }
                ]}
            />
            <EmptyPage
                image="/images/404 Error.png"
                title="Похоже страница удалена или перемещена по новому адресу"
                text="Попробуйте проверить корректность ссылки или же просто вернитесь на главную"
            />
            {/* <div className="mt-10">
                <ProductsRaw title="Самые просматриваемые" />
            </div> */}
        </div>
    )
}

export default Error;