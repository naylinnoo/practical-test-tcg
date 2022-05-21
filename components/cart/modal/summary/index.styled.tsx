import styled from 'styled-components'
export const SummaryWrapper = styled.div`
	padding-left: 20%;
	padding-right: 20%;
	padding-top: 2rem;
`
export const TextWrapper = styled.div`
	display: flex;
	justify-content: space-between;
`
export const TotalPrice = styled.p`
	font-weight: 700;
	font-size: 20px;
	line-height: 30px;
	margin: 0;
`
export const TotalPriceValue = styled(TotalPrice)`
	color: var(--total_price_value);
`

export const TotalCard = styled.p`
	font-weight: 600;
	font-size: 16px;
	line-height: 24px;
	margin: 0;
`

export const TotalCardValue = styled(TotalCard)`
	color: var(--total_item_value);
`
export const PayButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 2rem;
`
export const PayButton = styled.button`
	border: 0;
	outline: 0;
	background-color: var(--pay);
	font-weight: 500;
	font-size: 20px;
	line-height: 30px;
	border-radius: 2rem;
	padding: 0.5rem 3rem;
	color: var(--cart_text);
`
