import { Fader, StickyFader } from '@/components/layouts/fader/index.styled'
import useOutsideClick from 'public/hooks/useOutsideClick'
import { useRef } from 'react'
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

	// useOutsideClick(ref, () => {
	// 	console.log(isCartActive)
	// 	if (isCartActive) {
	// 		onClick()
	// 	}
	// })

	return (
		<ModalWrapper>
			<Modal ref={ref}>
				<ItemsWrapper>
					<ItemsScrollable>
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</ItemsScrollable>
					<StickyFader>
						<ClearAllButton>Clear All</ClearAllButton>
					</StickyFader>
				</ItemsWrapper>

				<CartSummary />
			</Modal>
		</ModalWrapper>
	)
}

export default CartModal
