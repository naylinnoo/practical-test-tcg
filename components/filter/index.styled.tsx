import styled from 'styled-components'
import ReactSelect from 'react-select'
import { device } from 'consts/ScreenSize'

export const Container = styled.div`
	position: relative;
	margin-bottom: 3rem;
	display: flex;
	justify-content: center;
	width: 100%;
	z-index: 9999;
`
export const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 80px 80px 70px;
	width: 40%;

	> * {
		border: 0;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
	}

	> :first-child {
		border-top-left-radius: 4rem;
		border-bottom-left-radius: 4rem;
	}

	> :not(:first-child) {
		border-left: 1px solid var(--filter_border);
	}

	> :nth-child(4) {
		> .Select__control {
			border-top-right-radius: 4rem;
			border-bottom-right-radius: 4rem;
		}
	}

	@media ${device.phone} {
		grid-template-columns: repeat(3, 1fr);
		width: 90%;
		gap: 20px;

		> * {
			box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
			background-color: var(--filter_background);
			border-radius: 4rem;
		}

		> :first-child {
			grid-column: 1 / -1;
			border-radius: 4rem;
		}

		> :not(:first-child) {
			border-left: 1px solid var(--filter_border);
			> .Select__control {
				border-radius: 4rem;
			}
		}
	}
`

export const Input = styled.input`
	background-color: var(--filter_background);
	font-size: 14px;
	line-height: 21px;
	height: 35px;
	outline: 0;
	border: 0;
	padding-left: 16px;

	::placeholder {
		color: var(--filter_text);
	}
`
export const Select = styled(ReactSelect)`
	.Select__control {
		border: 0 transparent;
		border-radius: 0;
		z-index: 9999;
	}
	.Select__placeholder {
		color: var(--filter_text);
	}
	> .Select_menu {
		z-index: 9999;
	}
`
