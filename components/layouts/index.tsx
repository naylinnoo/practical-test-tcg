import { Body } from './index.styled'
import Navbar from '@/components/layouts/nav'
import { Fader } from './fader/index.styled'
import {
	CartButton,
	CartButtonWrapper,
	CartIcon,
	ItemCount,
} from '../cart/index.styled'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
	const { children } = props
	return (
		<>
			<Navbar />
			<Body>{children}</Body>
			<CartButtonWrapper>
				<CartButton>
					<ItemCount>3</ItemCount>
					<CartIcon src="/assets/Cart.svg" />
					View Cart
				</CartButton>
			</CartButtonWrapper>
			<Fader />
		</>
	)
}

export default Layout
