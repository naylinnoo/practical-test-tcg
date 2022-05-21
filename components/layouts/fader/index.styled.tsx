import styled from 'styled-components'

export const Fader = styled.div`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	height: 8rem;
	z-index: 999;
	background: linear-gradient(
		180deg,
		rgba(254, 254, 254, 0) 0%,
		rgba(255, 255, 255, 1) 100%
	);
`

export const StickyFader = styled.div`
	position: absolute;
	bottom: -1px;
	left: 0;
	right: 0;
	height: 8rem;
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
	background-color: green;
	background: linear-gradient(
		180deg,
		rgba(254, 254, 254, 0) 0%,
		rgba(255, 255, 255, 1) 100%
	);
`
