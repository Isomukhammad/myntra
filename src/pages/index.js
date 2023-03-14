import { useLang } from '@/hooks/useLang';
import { nextAxios } from '@/utils/axios.utils';
import { SEO, About, Banner, Categories, DailySlider, ProductsRaw, NewsRow } from '../components/index';

const Home = ({ page }) => {
  const lang = useLang();

  return (
    <>
      <SEO
        title={page.seo_title}
        description={page.meta_description}
        keywords={page.meta_keywords}
      />

      <main className="Home pt-[24px] pb-[80px]">
        <div className='flex flex-col gap-[20px] lg:grid lg:grid-cols-[65%_35%] lg:gap-[16px] bg-bg'>
          <Banner />
          <DailySlider />
        </div>
        <div className='mt-[20px] md:mt-[84px]'>
          <Categories />
        </div>
        <div className='mt-12 lg:mt-20'>
          <ProductsRaw title="Купите, пока это выгодно" time="19:54:41" link="/products?is_promotion=1&quantity=12" /> {/* lang */}
        </div>
        <div className='pt-[40px] lg:pt-[80px]'>
          <Banner type='ad' />
        </div>
        <div className='mt-12 lg:pt-20'>
          <ProductsRaw title="Горячие новинки" link="/products?is_new=1&quantity=12" /> {/* lang */}
        </div>
        <div className='mt-12'>
          {/* <ProductsRaw title="Самые просматриваемые" /> */}
        </div>
        <div className='mt-12'>
          <NewsRow />
        </div>
        <div className='mt-12'>
          {/* <ProductsRaw title="Больше товаров" /> */}
        </div>
        <div className='mt-20'>
          <About body={page.body} />
        </div>
      </main>
    </>
  )
}

export const getServerSideProps = async ({ locale }) => {
  const page = await nextAxios.get('pages/1', {
    headers: { 'Accept-Language': locale },
  })
    .then(res => res.data.data)
    .catch(error => console.error(error))

  if (!page) return { notFound: true };

  return {
    props: {
      page,
    },
  }
}

export default Home;