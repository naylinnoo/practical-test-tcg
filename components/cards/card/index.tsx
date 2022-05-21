import { FC, useState } from 'react'
import {
	Button,
	Container,
	Content,
	ContentWrapper,
	Image,
	ImageWrapper,
	Price,
	PriceQuantityWrapper,
	Quantity,
	Rarity,
	Title,
} from './index.styled'

import type { Card as CardType } from '@/models/types'

type CardProps = {
	card: CardType
}

const Card = (props: CardProps) => {
	const [isSelected, setIsSelected] = useState(false)
	const { card } = props

	return (
		<>
			<Container>
				<ImageWrapper>
					<Image src={card.images.large} alt={card.name} />
				</ImageWrapper>
				<ContentWrapper>
					<Content>
						<Title>{card.name}</Title>
						<Rarity>{card.rarity}</Rarity>
						<PriceQuantityWrapper>
							<Price>
								${card.cardmarket.prices.averageSellPrice}
							</Price>

							<Quantity>{card.set.total} Left</Quantity>
						</PriceQuantityWrapper>
					</Content>
					<Button
						isSelected={isSelected}
						onClick={() => console.log('You picked venosaur')}
					>
						{isSelected ? `Selected` : `Select Card`}
					</Button>
				</ContentWrapper>
			</Container>
		</>
	)
}

export default Card
