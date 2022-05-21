import styled from 'styled-components'
import ReactSelect from 'react-select'

export const Container = styled.div`
	display: flex;
	justify-content: center;
	width: 100%;
`
export const FilterWrapper = styled.div`
	display: grid;
	grid-template-columns: 1.3fr 0.5fr 0.7fr 0.5fr;
	width: 40%;

	> * {
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
		background-color: var(--filter_background);
		overflow: hidden;
	}

	> :first-child {
		border-top-left-radius: 4rem;
		border-bottom-left-radius: 4rem;
	}

	> :not(:first-child) {
		border-left: 1px solid var(--filter_border);
	}

	> :nth-child(4) {
		border-top-right-radius: 4rem;
		border-bottom-right-radius: 4rem;
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
		border: 0;
		border-radius: 0;
		overflow: hidden;
	}
	.Select__placeholder {
		color: var(--filter_text);
	}
`
