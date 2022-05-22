import styled, { css } from 'styled-components'

export const ItemWrapper = styled.div`
	display: grid;
	grid-template-columns: 5rem 1fr 4rem;
	gap: 2rem;
	margin-bottom: 3rem;
`
export const Image = styled.img`
	width: 100%;
`

export const InfoWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

export const Name = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	margin: 0px;
`

export const Price = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	margin: 0px;

	::after {
		color: var(--item_per_card);
		content: ' per card';
	}
`

export const Stock = styled.p`
	color: var(--item_card_left);
	font-weight: 600;
	font-size: 14px;
	line-height: 21px;
	margin: 0;

	::after {
		color: var(--item_card_left_text);
		content: ' cards left';
	}
`

export const ActionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`

export const QuantityWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: flex-end;
`

export const Quantity = styled.p`
	font-weight: 600;
	font-size: 20px;
	line-height: 30px;
	margin-top: 0.5rem;
	padding-right: 0.5rem;
	color: var(--item_quantity);
`
type IncreaseButtonProps = {
	canIncrease: boolean
}

export const IncreaseButton = styled.button`
	border: 0;
	outline: 0;
	font-size: 60px;
	width: auto;
	height: 1rem;
	color: var(--item_can_go);
	display: block;
	background-size: cover;
	${({ canIncrease }: IncreaseButtonProps) => {
		return canIncrease
			? css`
					background: url(/assets/Increase.svg) no-repeat;
			  `
			: css`
					background: url(/assets/IncreaseDisabled.svg) no-repeat;
			  `
	}}
`
type DecreaseButtonProps = {
	canDecrease: boolean
}

export const DecreaseButton = styled.button`
	border: 0;
	outline: 0;
	width: auto;
	height: 1rem;
	color: var(--item_can_go);
	display: block;
	background-size: cover;
	${({ canDecrease }: DecreaseButtonProps) => {
		return canDecrease
			? css`
					background: url(/assets/Decrease.svg) no-repeat;
			  `
			: css`
					background: url(/assets/Remove.svg) no-repeat;
			  `
	}}
`

export const TotalPriceTitle = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 18px;
	margin: 0;
	text-align: right;
`
export const TotalPrice = styled.p`
	font-weight: 700;
	font-size: 16px;
	line-height: 24px;
	color: var(--item_price);
	margin: 0;
	text-align: right;
`
