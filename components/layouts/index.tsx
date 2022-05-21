import { Body } from './index.styled'
import Navbar from '@/components/layouts/nav'

type LayoutProps = {
	children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
	const { children } = props
	return (
		<>
			<Navbar />
			<Body>{children}</Body>
		</>
	)
}

export default Layout
