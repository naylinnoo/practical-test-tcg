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

type LayoutProps = {
	children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
	const [isCartActive, setIsCartActive] = useState(false)

	const { children } = props
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
					onClick={() => setIsCartActive(!isCartActive)}
				>
					{!isCartActive && <ItemCount>3</ItemCount>}
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
