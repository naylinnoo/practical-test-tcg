import styled from 'styled-components'

export const CardsWrapper = styled.div`
	display: grid;
	gap: 1rem;
	grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
`
export const LoadMoreWrapper = styled.div`
	display: flex;
	justify-content: center;
	padding-bottom: 10rem;
`
export const LoadMore = styled.p`
	text-align: center;
	cursor: pointer;
`
