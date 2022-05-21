import Card from './card'
import { CardsWrapper } from './index.styled'

type CardsProps = {
	cards?: any
}
export const Cards = ({ cards }: CardsProps) => {
	return (
		<CardsWrapper>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</CardsWrapper>
	)
}
