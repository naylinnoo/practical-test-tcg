import { Fader, StickyFader } from '@/components/layouts/fader/index.styled'
import { MiddleMan } from '@/components/layouts/index.styled'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { clearAll } from '@/store/slices/cartSlice'
import useOutsideClick from 'public/hooks/useOutsideClick'
import { useRef } from 'react'
import useSWR from 'swr'
import {
	ClearAllButton,
	ItemsScrollable,
	ItemsWrapper,
	Modal,
	ModalWrapper,
} from './index.styled'
import CartItem from './item'
import CartSummary from './summary'
type CartModalProps = {
	onClick: any
	isCartActive: boolean
}

const CartModal = ({ onClick, isCartActive }: CartModalProps) => {
	const ref = useRef<HTMLDivElement>(null)
	const dispatch = useAppDispatch()

	// useOutsideClick(ref, () => {
	// 	console.log(isCartActive)
	// 	if (isCartActive) {
	// 		onClick()
	// 	}
	// })
	const { items } = useAppSelector((state) => state.cart)
	const totalQuantity = items.reduce((acc, item) => acc + item.quantity, 0)
	const totalPrice = items.reduce(
		(acc, item, index) => acc + item.price * items[index].quantity,
		0
	)

	return (
		<ModalWrapper>
			<Modal ref={ref}>
				<ItemsWrapper>
					<ItemsScrollable>
						{items.length === 0 && (
							<MiddleMan>
								Get yourself some cards, mate!
							</MiddleMan>
						)}
						{items.map((value) => {
							return <CartItem key={value.id} {...value} />
						})}
					</ItemsScrollable>
					<StickyFader>
						<ClearAllButton onClick={() => dispatch(clearAll())}>
							Clear All
						</ClearAllButton>
					</StickyFader>
				</ItemsWrapper>

				<CartSummary quantity={totalQuantity} price={totalPrice} />
			</Modal>
		</ModalWrapper>
	)
}

export default CartModal
