import { Cards } from '@/components/cards'
import Filter from '@/components/filter'
import type { NextPage } from 'next'

const Home: NextPage = () => {
	return (
		<>
			<Filter />
			<Cards />
		</>
	)
}

export default Home
