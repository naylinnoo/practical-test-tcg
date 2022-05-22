import { Body } from './index.styled'
import Navbar from '@/components/layouts/nav'
import { Fader } from './fader/index.styled'
import {
	CartButton,
	CartButtonTitle,
	CartButtonWrapper,
	ItemCount,
} from '../cart/index.styled'
import { useState } from 'react'
import CartModal from '../cart/modal'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { makePay } from '@/store/slices/cartSlice'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
	const dispatch = useAppDispatch()
	const [isCartActive, setIsCartActive] = useState(false)

	const { children } = props
	const { items, paid } = useAppSelector((state) => state.cart)

	return (
		<>
			{isCartActive && (
				<CartModal
					isCartActive={isCartActive}
					onClick={() => setIsCartActive(!isCartActive)}
				/>
			)}
			<Navbar />
			<Body>{children}</Body>

			<CartButtonWrapper>
				<CartButton
					isCartActive={isCartActive}
					onClick={() => {
						setIsCartActive(!isCartActive)
						if (paid) {
							dispatch(makePay(false))
						}
					}}
				>
					{!isCartActive && <ItemCount>{items.length}</ItemCount>}
					<img
						src={`/assets/${isCartActive ? `Close` : `Cart`}.svg`}
					/>
					{!isCartActive && (
						<CartButtonTitle>`View Cart`</CartButtonTitle>
					)}
				</CartButton>
			</CartButtonWrapper>
			<Fader />
		</>
	)
}

export default Layout
