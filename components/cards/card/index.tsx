import { FC, useEffect, useState } from 'react'
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
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { addCard } from '@/store/slices/cartSlice'

type CardProps = {
	card: CardType
}

const Card = (props: CardProps) => {
	const dispatch = useAppDispatch()
	const { card } = props

	const cart = useAppSelector((state) => state.cart)
	const isSelected = cart.items.find((item) => item.id === card.id)

	const selectCard = () => {
		if (isSelected) {
			return
		} else {
			dispatch(
				addCard({
					id: props.card.id,
					quantity: 1,
					price: props.card.cardmarket.prices.averageSellPrice ?? 0,
				})
			)
		}
	}

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
								? selectCard()
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
