import Card from '@/components/cards/card'
import {
	CardsWrapper,
	LoadMore,
	LoadMoreWrapper,
} from '@/components/cards/index.styled'
import Filter from '@/components/filter'
import { CardsData } from '@/models/data'
import fetcher from 'fetcher'
import { useState } from 'react'
import useSWR from 'swr'

type HomeProps = {
	initialCardsData: CardsData
}

const Home = (props: HomeProps) => {
	const [pageSize, setPageSize] = useState(12)
	const request = {
		pageSize: pageSize,
	}
	const { data, error } = useSWR([`/cards`, request], fetcher, {
		fallbackData: props.initialCardsData,
	})

	if (error) return <div>failed to load</div>
	if (!data) return <div>loading...</div>

	const loadMoreData = () => {
		setPageSize(pageSize + 12)
	}

	return (
		<>
			<Filter />
			<CardsWrapper>
				{data.data?.map((value: any) => {
					return <Card key={value.id} card={value} />
				})}
			</CardsWrapper>
			<LoadMoreWrapper>
				<LoadMore onClick={() => loadMoreData()}>
					load more data
				</LoadMore>
			</LoadMoreWrapper>
		</>
	)
}

export const getStaticProps = async () => {
	const res = await fetch(
		process.env.NEXT_PUBLIC_API_URL + '/cards?pageSize=12'
	)
	const data = await res.json()

	return {
		props: {
			initialCardsData: data,
		},
	}
}
export default Home
