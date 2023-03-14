import { useRouter } from 'next/router';
import useSWR from 'swr';
import fetcher from '@/utils/fetcher.utils';

export const useLang = () => {
    const router = useRouter();

    const disableRevalidation = {
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 0,
    }

    const { data: lang, mutate } = useSWR(
        ["/texts"],
        url => fetcher(url, { headers: { 'Accept-Language': router.locale } }),
        disableRevalidation
    )

    if (lang) {
        const words = {}
        lang.data.map((word) => (words[word.key] = word.value))
        return words;
    }
}