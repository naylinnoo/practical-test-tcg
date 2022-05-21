import { FC } from 'react'
import {
	Container,
	ContentWrapper,
	LogoImg,
	LogoWrapper,
	Title,
} from './index.styled'
import Logo from '@/components/svg/Logo.svg'

const Navbar: FC = () => {
	return (
		<>
			<Container>
				<ContentWrapper>
					<Title>TCG Marketplace</Title>
					<LogoWrapper>
						<LogoImg src="/assets/Logo.svg" />
					</LogoWrapper>
				</ContentWrapper>
			</Container>
		</>
	)
}

export default Navbar
