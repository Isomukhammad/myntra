const NewsRawTab = ({ data }) => {
    return (
        <div
            className="NewsRawTab h-60 w-[448px] bg-cover p-4 pt-6 flex flex-col justify-between rounded-sm text-white font-bold cursor-pointer active:cursor-grabbing"
            style={{
                backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.072) 0%, rgba(0, 0, 0, 0.36) 100%), url('${data.medium_img}')`,
                backgroundPosition: 'center'
            }}
        >
            <h2>КОРОТКО</h2>
            <p>{data.name}</p>
        </div>
    );
}

export default NewsRawTab;