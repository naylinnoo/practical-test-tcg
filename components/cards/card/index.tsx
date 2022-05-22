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

	const isAvailable = () =>
		card.cardmarket.prices.averageSellPrice ? true : false

	return (
		<>
			<Container>
				<ImageWrapper>
					<Image src={card.images.large} alt={card.name} />
				</ImageWrapper>
				<ContentWrapper>
					<Content>
						<Title>{card.name}</Title>
						{/* Need to show something if there is no data */}
						<Rarity>{card.rarity ?? `\xa0`}</Rarity>
						<PriceQuantityWrapper>
							<Price>
								{card.cardmarket.prices.averageSellPrice
									? `$${card.cardmarket.prices.averageSellPrice}`
									: `No Price`}
							</Price>

							<Quantity>{card.set.total} Left</Quantity>
						</PriceQuantityWrapper>
					</Content>
					<Button
						isSelected={isSelected}
						isAvailable={isAvailable()}
						onClick={() => {
							isAvailable()
								? console.log('Selected')
								: alert('This item is not available')
						}}
					>
						{card.cardmarket.prices.averageSellPrice
							? isSelected
								? `Selected`
								: `Select Card`
							: `Not Available`}
					</Button>
				</ContentWrapper>
			</Container>
		</>
	)
}

export default Card
