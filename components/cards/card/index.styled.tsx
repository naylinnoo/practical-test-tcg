import styled, { css } from 'styled-components'

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-items: center;
	background-color: transparent;
	z-index: 1;
`
export const ImageWrapper = styled.div`
	position: relative;
	width: 194px;
	height: 271px;
	border-radius: 1rem;
	display: flex;
	justify-content: center;
	z-index: 9;
`

export const Image = styled.img`
	width: 194px;
	height: 271px;
`

export const ContentWrapper = styled.div`
	position: relative;
	padding-top: 3.5rem;
	padding-bottom: 2rem;
	top: -5rem;
	width: 100%;
	max-width: 18rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	background-color: var(--card_background);
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 20px;
`
export const Content = styled.div`
	padding-top: 1.4rem;
`

export const Title = styled.h3`
	font-style: normal;
	font-weight: 700;
	text-align: center;
	font-size: 25px;
	margin: 0.3rem;
	line-height: 38px;
`
export const Rarity = styled.p`
	font-style: normal;
	font-weight: 400;
	font-size: 16px;
	line-height: 24px;
	text-align: center;
	margin: 0.3rem;
	color: var(--card_rarity);
`

export const PriceQuantityWrapper = styled.div`
	margin-top: 4px;
	display: flex;
	gap: 30px;
`
export const Price = styled.p`
	font-weight: 400;
	font-size: 20px;
	margin: 0.3rem;
	line-height: 30px;
	color: var(--card_price);
`
export const Quantity = styled.p`
	font-weight: 400;
	font-size: 20px;
	margin: 0.3rem;
	line-height: 30px;
	color: var(--card_qty);
`

type ButtonProps = {
	isSelected: boolean
	isAvailable: boolean
}

export const Button = styled.button`
	position: absolute;
	padding: 0.8rem 3rem;
	bottom: -1.5rem;
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	border: 0;
	border-radius: 3rem;

	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	transition: all 0.2s ease-in-out;

	color: var(
		${({ isSelected, isAvailable }: ButtonProps) => {
			return isAvailable
				? isSelected
					? css`--card_button_selected_text`
					: css`--card_button_text`
				: css`--card_button_selected_text`
		}}
	);

	background-color: var(
		${({ isSelected, isAvailable }: ButtonProps) => {
			return isAvailable
				? isSelected
					? css`--card_button_selected`
					: css`--card_button`
				: css`--card_button_unavailable`
		}}
	);

	&:hover {
		transform: scale(1.05);
	}
`
