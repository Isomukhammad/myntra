import Head from "next/head";

const HeadInfo = ({ title, content }) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={content} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    )
}

HeadInfo.defaultProps = {
    title: "Wyltra",
    content: ""
}

export default HeadInfo;