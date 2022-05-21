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

const Card: FC = () => {
	const [isSelected, setIsSelected] = useState(false)
	return (
		<>
			<Container>
				<ImageWrapper>
					<Image src={`https://images.pokemontcg.io/xy1/1.png`} />
				</ImageWrapper>
				<ContentWrapper>
					<Content>
						<Title>Pokemon</Title>
						<Rarity>Very Rare</Rarity>
						<PriceQuantityWrapper>
							<Price>$1.99</Price>
							<Quantity>3 Left</Quantity>
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
