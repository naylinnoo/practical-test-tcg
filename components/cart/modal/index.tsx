import useOutsideClick from 'public/hooks/useOutsideClick'
import { useRef } from 'react'
import { Modal, ModalWrapper } from './index.styled'
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
			<Modal ref={ref}>ello mate</Modal>
		</ModalWrapper>
	)
}

export default CartModal
