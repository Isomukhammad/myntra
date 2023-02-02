import About from '@/components/Main/About';
import Banner from '@/components/Main/Banner';
import Categories from '@/components/Main/Categories';
import DailySlider from '@/components/Main/DailySlider';
import NewsRow from '@/components/News/NewsRow';
import ProductsRaw from '@/components/Product/ProductsRaw';
import HeadInfo from '@/utils/headInfo';
import Head from 'next/head'

const Home = () => {
  return (
    <>
      {/* <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      <HeadInfo title="Myntra" />

      <main className="Home pt-[24px] pb-[80px]">
        <div className='stiky top-0 Home__sticky'>Hello</div>
        <div className='flex flex-col gap-[20px] lg:grid lg:grid-cols-[65%_35%] lg:gap-[16px] bg-bg'>
          <Banner />
          <DailySlider />
        </div>
        <div className='pt-[20px] md:pt-[64px]'>
          <Categories />
        </div>
        <div className='mt-12 lg:mt-20'>
          <ProductsRaw title="Купите, пока это выгодно" time="19:54:41" />
        </div>
        <div className='pt-[40px] lg:pt-[80px]'>
          <Banner type='ad' />
        </div>
        <div className='mt-12 lg:pt-20'>
          <ProductsRaw title="Горячие новинки" />
        </div>
        <div className='mt-12'>
          <ProductsRaw title="Самые просматриваемые" />
        </div>
        <div className='mt-12'>
          <NewsRow />
        </div>
        <div className='mt-12'>
          <ProductsRaw title="Больше товаров" />
        </div>
        <div className='mt-20'>
          <About />
        </div>
      </main>
    </>
  )
}

export default Home;