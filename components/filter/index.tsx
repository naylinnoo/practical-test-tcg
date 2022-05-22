import { RarityData, SetData, TypesData } from '@/models/data'
import { FC } from 'react'
import useSWR from 'swr'
import { Container, Select, FilterWrapper, Input } from './index.styled'

const Filter: FC = () => {
	const { data: typeData } = useSWR<TypesData>('/types')
	const { data: rarityData } = useSWR<RarityData>('/rarities')
	const { data: setData } = useSWR<SetData>('/sets')

	console.log(typeData, rarityData, setData)

	return (
		<Container>
			<FilterWrapper>
				<Input name="name" type={'text'} placeholder={'Name...'} />
				<Select
					instanceId="type"
					name="type"
					classNamePrefix={'Select'}
					options={typeData?.data?.map((type) => ({
						value: type,
						label: type,
					}))}
					placeholder={'Type'}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
				<Select
					instanceId="rarity"
					classNamePrefix={'Select'}
					placeholder={'Rarity'}
					options={rarityData?.data?.map((rarity) => ({
						value: rarity,
						label: rarity,
					}))}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
				<Select
					instanceId="set"
					name="set"
					classNamePrefix={'Select'}
					placeholder={'Set'}
					options={setData?.data?.map((set) => ({
						value: set.id,
						label: set.name,
					}))}
					components={{
						IndicatorSeparator: () => null,
					}}
				/>
			</FilterWrapper>
		</Container>
	)
}

export default Filter
