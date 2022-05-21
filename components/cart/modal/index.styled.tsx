import styled from 'styled-components'

export const ModalWrapper = styled.div`
	position: fixed;
	bottom: 3.8rem;
	display: flex;
	width: 100%;
	height: 100vh;
	justify-content: center;
	/* align-items: center; */
	z-index: 9999;
	/* background-color: yellow; */
`

export const Modal = styled.div`
	position: absolute;
	bottom: 1rem;
	height: 70vh;
	width: 80%;
	max-width: 25rem;
	min-width: 3px;
	padding: 2rem;
	border-radius: 0.8rem;
	/* background-color: green; */
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	background-color: var(--cart_bg);
	z-index: 999;

	transition: all 0.2s ease-in-out;
	transform: scale(1.05);
`
export const ItemsWrapper = styled.div`
	position: relative;
`
export const ItemsScrollable = styled.div`
	overflow-y: auto;
	/* overflow: hidden; */
	height: 50vh;
	-ms-overflow-style: none; /* IE and Edge */
	scrollbar-width: none; /* Firefox */
	::-webkit-scrollbar {
		display: none;
	}
`

export const ClearAllButton = styled.p`
	font-weight: 400;
	font-size: 12px;
	line-height: 18px;
	padding-top: 5rem;
	text-decoration: underline;
	color: var(--cart_clear);

	cursor: pointer;
`
