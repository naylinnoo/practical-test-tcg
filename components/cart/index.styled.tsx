import styled from 'styled-components'

export const CartButtonWrapper = styled.div`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 9999;
	bottom: 2.5rem;
`

export const CartIcon = styled.img`
	padding-right: 0.5rem;
`

export const CartButton = styled.button`
	background: var(--cart_button_bg);
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 0.5rem;
	border: 0;
	outline: 0;
	padding: 0.5rem 1rem;

	font-weight: 500;
	font-size: 12px;
	line-height: 14px;

	color: var(--cart_text);

	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;

	transition: ease-in-out 0.2s;
	transition: all 0.2s ease-in-out;

	&:hover {
		transform: scale(1.05);
	}
`

export const ItemCount = styled.span`
	position: absolute;
	width: 1.2rem;
	height: 1.2rem;
	font-size: 12px;
	top: -0.4rem;
	left: -0.4rem;
	border-radius: 100%;
	background-color: var(--cart_noti);
	display: flex;
	align-items: center;
	justify-content: center;
`
