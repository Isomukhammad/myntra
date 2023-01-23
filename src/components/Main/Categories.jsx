import Image from "next/image";

const Categories = () => {
    return (
        <div className="Categories flex flex-row overflow-x-scroll md:grid md:grid-cols-3 2xl:flex 2xl:justify-between">
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3.png"
                        alt="Акции и скидки"
                        width="120"
                        height="120"
                    />
                    <p>Акции и скидки</p>
                </div>
            </div>
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3-1.png"
                        alt="Акции и скидки"
                        sizes="100vw"
                        width={120}
                        height={120}
                    />
                    <p>Ноутбуки и комьютеры</p>
                </div>
            </div>
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3-2.png"
                        alt="Акции и скидки"
                        sizes="100vw"
                        width="0"
                        height="0"
                    />
                    <p>Акции и скидки</p>
                </div>
            </div>
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3-3.png"
                        alt="Акции и скидки"
                        sizes="100vw"
                        width="0"
                        height="0"
                    />
                    <p>Акции и скидки</p>
                </div>
            </div>
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3-4.png"
                        alt="Акции и скидки"
                        sizes="100vw"
                        width="0"
                        height="0"
                    />
                    <p>Акции и скидки</p>
                </div>
            </div>
            <div className="Categories__tab">
                <div>
                    <Image
                        src="/images/image 3-5.png"
                        alt="Акции и скидки"
                        sizes="100vw"
                        width="0"
                        height="0"
                    />
                    <p>Акции и скидки</p>
                </div>
            </div>
        </div>
    );
}

export default Categories;