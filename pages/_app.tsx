import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '@/components/layouts/index'
import { SWRConfig, SWRConfiguration } from 'swr'
import fetcher from 'fetcher'
import { Provider } from 'react-redux'
import store from '@/store/Store'

function MyApp({ Component, pageProps }: AppProps & SWRConfiguration) {
	return (
		<Provider store={store}>
			<SWRConfig
				value={{
					refreshInterval: 10000 * 60,
					shouldRetryOnError: false,
					fetcher,
				}}
			>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</SWRConfig>
		</Provider>
	)
}

export default MyApp
