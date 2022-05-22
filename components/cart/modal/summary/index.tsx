import { useAppDispatch } from '@/store/hooks'
import { makePay } from '@/store/slices/cartSlice'
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
type CartItemProps = {
	quantity: number
	price: number
}
const CartSummary = ({ quantity, price }: CartItemProps) => {
	const dispatch = useAppDispatch()
	return (
		<>
			<SummaryWrapper>
				<TextWrapper>
					<TotalCard>Total Cards</TotalCard>
					<TotalCardValue>{quantity}</TotalCardValue>
				</TextWrapper>
				<TextWrapper>
					<TotalPrice>Total Price</TotalPrice>
					<TotalPriceValue>${price}</TotalPriceValue>
				</TextWrapper>
				<PayButtonWrapper>
					<PayButton
						onClick={() => dispatch(makePay(true))}
						disabled={price === 0}
					>
						Pay Now
					</PayButton>
				</PayButtonWrapper>
			</SummaryWrapper>
		</>
	)
}

export default CartSummary
