import { FC } from 'react'
import { Container, Select, FilterWrapper, Input } from './index.styled'

const Filter: FC = () => {
	return (
		<Container>
			<FilterWrapper>
				<Input type={'text'} placeholder={'Name...'} />
				<Select
					classNamePrefix={'Select'}
					placeholder={'Type'}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
				<Select
					classNamePrefix={'Select'}
					placeholder={'Rarity'}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
				<Select
					classNamePrefix={'Select'}
					placeholder={'Set'}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
			</FilterWrapper>
		</Container>
	)
}

export default Filter
