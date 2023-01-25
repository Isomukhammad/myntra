import { useRouter } from "next/router";
import { useEffect } from "react";
import NProgress from "nprogress";

//styles
import '@/styles/nprogress.scss'
import '@/styles/_app.scss';
import '@/styles/_vars.scss';
import '@/styles/Home.scss';
import '@/styles/MobileMenu.scss';

//layout
import Layout from "@/layouts/Layout/Layout";

const App = ({ Component, pageProps }) => {
  const router = useRouter()
  console.log(router);

  useEffect(() => {
    const handleStart = () => NProgress.start()
    const handleStop = () => NProgress.done()

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default App;
