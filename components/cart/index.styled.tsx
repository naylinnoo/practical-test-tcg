import { type } from 'os'
import styled from 'styled-components'

export const CartButtonWrapper = styled.div`
	position: fixed;
	width: 100%;
	display: flex;
	justify-content: center;
	z-index: 9999;
	bottom: 2.5rem;
`

export const CartButtonTitle = styled.p`
	padding-left: 0.5rem;
`

type CartButtonProps = {
	isCartActive?: boolean
}

export const CartButton = styled.button`
	box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
	border-radius: 0.5rem;
	border: 0;
	outline: 0;
	z-index: 9999;

	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	${({ isCartActive }: CartButtonProps) =>
		isCartActive
			? `	background: var(--cart_cancel);
          padding: 0.8rem 0.8rem;
        `
			: `	background: var(--cart_button_bg);
          padding: 0.3rem 0.8rem;
        `}
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
