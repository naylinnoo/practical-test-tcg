import { MiddleMan } from '@/components/layouts/index.styled'
import { useAppDispatch } from '@/store/hooks'
import { addCard, removeCard } from '@/store/slices/cartSlice'
import useSWR from 'swr'
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

type CartItemProps = {
	id: string
	quantity: number
	price: number
}
const CartItem = ({ id, quantity, price }: CartItemProps) => {
	const dispatch = useAppDispatch()
	const { data, error } = useSWR([`/cards/${id}`])

	if (!data) return <MiddleMan>loading...</MiddleMan>
	const card = data.data

	const increaseQuantity = () => {
		dispatch(addCard({ id, quantity: 1, price: price }))
	}

	const decreaseQuantity = () => {
		dispatch(removeCard({ id, quantity: 1, price: price }))
	}

	return (
		<ItemWrapper>
			<Image src={card.images.small} />
			<InfoWrapper>
				<div>
					<Name>{card.name}</Name>
					<Price>${card.cardmarket.prices.averageSellPrice}</Price>
				</div>
				<Stock> {card.set.total}</Stock>
			</InfoWrapper>
			<ActionWrapper>
				<QuantityWrapper>
					<Quantity>{quantity}</Quantity>
					<div>
						<IncreaseButton
							canIncrease={quantity < card.set.total}
							disabled={quantity >= card.set.total}
							onClick={increaseQuantity}
						/>
						<DecreaseButton
							canDecrease={quantity > 1}
							onClick={decreaseQuantity}
						/>
					</div>
				</QuantityWrapper>
				<TotalPriceTitle>Price</TotalPriceTitle>
				<TotalPrice>
					$
					{(
						card.cardmarket.prices.averageSellPrice * quantity
					).toFixed(2)}
				</TotalPrice>
			</ActionWrapper>
		</ItemWrapper>
	)
}

export default CartItem
