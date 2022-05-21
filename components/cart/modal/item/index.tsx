import {
	ActionWrapper,
	DecreaseButton,
	Image,
	IncreaseButton,
	InfoWrapper,
	ItemWrapper,
	Name,
	Price,
	Quantity,
	QuantityWrapper,
	Stock,
	TotalPrice,
	TotalPriceTitle,
} from './index.styled'

const CartItem = () => {
	return (
		<ItemWrapper>
			<Image src={`https://images.pokemontcg.io/xy1/1.png`} />
			<InfoWrapper>
				<div>
					<Name>Banana</Name>
					<Price>$99</Price>
				</div>
				<Stock>9</Stock>
			</InfoWrapper>
			<ActionWrapper>
				<QuantityWrapper>
					<Quantity>2</Quantity>
					<div>
						<IncreaseButton />
						<DecreaseButton />
					</div>
				</QuantityWrapper>
				<TotalPriceTitle>Price</TotalPriceTitle>
				<TotalPrice>$99</TotalPrice>
			</ActionWrapper>
		</ItemWrapper>
	)
}

export default CartItem
