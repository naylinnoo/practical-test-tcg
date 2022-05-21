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
	max-width: 30rem;
	min-width: 3px;
	padding: 1rem;
	border-radius: 0.8rem;
	/* background-color: green; */
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	background-color: var(--cart_bg);
	z-index: 999;

	transition: all 0.2s ease-in-out;
	transform: scale(1.05);
`
