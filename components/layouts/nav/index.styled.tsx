import styled from 'styled-components'

export const Container = styled.div`
	background-color: var(--nav_bg);
	display: flex;
	justify-content: center;
	width: 100%;
	position: fixed;
`

export const Title = styled.h1`
	font-weight: 700;
	font-size: 24px;
	line-height: 36px;
	color: var(--title);
	padding-bottom: 0.5rem;
`

export const ContentWrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
`

export const LogoWrapper = styled.div`
	position: absolute;
	padding-top: 0;
	height: 50%;
	bottom: -8px;
`

export const LogoImg = styled.img`
	background-color: var(--nav_bg);
	border-radius: 0 0 100% 100%;
	width: 3.5rem;
	height: 3.5rem;
`
