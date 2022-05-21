import { Body } from './index.styled'
import Navbar from '@/components/layouts/nav'
import { Fader } from './fader/index.styled'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
	const { children } = props
	return (
		<>
			<Navbar />
			<Body>{children}</Body>
			<Fader />
		</>
	)
}

export default Layout
