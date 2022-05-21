import {
	PayButtonWrapper,
	PayButton,
	SummaryWrapper,
	TextWrapper,
	TotalCard,
	TotalCardValue,
	TotalPrice,
	TotalPriceValue,
} from './index.styled'

const CartSummary = () => {
	return (
		<>
			<SummaryWrapper>
				<TextWrapper>
					<TotalCard>Total Cards</TotalCard>
					<TotalCardValue>9</TotalCardValue>
				</TextWrapper>
				<TextWrapper>
					<TotalPrice>Total Price</TotalPrice>
					<TotalPriceValue>$99</TotalPriceValue>
				</TextWrapper>
				<PayButtonWrapper>
					<PayButton>Pay Now</PayButton>
				</PayButtonWrapper>
			</SummaryWrapper>
		</>
	)
}

export default CartSummary
