const NewsRawTab = () => {
    return (
        <div
            className="NewsRawTab h-60 w-[448px] bg-cover p-4 pt-6 flex flex-col justify-between rounded-sm text-white font-bold cursor-pointer active:cursor-grabbing"
            style={{ backgroundImage: "linear-gradient(180deg, rgba(0, 0, 0, 0.072) 0%, rgba(0, 0, 0, 0.36) 100%), url('/images/image 5.png')" }}
        >
            <h1>КОРОТКО</h1>
            <p>Новый шлем для Playstation 5 выйдет в феврале 2023 года</p>
        </div>
    );
}

export default NewsRawTab;