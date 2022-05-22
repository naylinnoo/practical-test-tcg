import { RarityData, SetData, TypesData } from '@/models/data'
import { Formik, useFormikContext } from 'formik'
import { FC, useRef } from 'react'
import useSWR from 'swr'
import { Container, Select, FilterWrapper, Input } from './index.styled'

type FilterProps = {
	onSubmit: (query: string) => void
}

const Filter = ({ onSubmit }: FilterProps) => {
	const { data: typeData } = useSWR<TypesData>('/types')
	const { data: rarityData } = useSWR<RarityData>('/rarities')
	const { data: setData } = useSWR<SetData>('/sets')

	const formRef = useRef<any>()

	const handleKeyPress = (event: React.KeyboardEvent<HTMLElement>) => {
		if (event.key === 'Enter') {
			if (formRef.current) {
				formRef.current.handleSubmit()
			}
		}
	}

	return (
		<Container>
			<Formik
				innerRef={formRef}
				initialValues={{
					name: '',
					type: '',
					rarity: '',
					set: '',
				}}
				onSubmit={(values) => {
					const query = `${values.name ? `name:${values.name}` : ''}${
						values.type ? ` types:${values.type}` : ''
					}${values.rarity ? ` rarity:${values.rarity}` : ''}${
						values.set ? ` set:${values.set}` : ''
					}`
					onSubmit(query)
				}}
			>
				{({ values, setFieldValue, errors }) => (
					<FilterWrapper>
						<Input
							name="name"
							type={'text'}
							placeholder={'Name...'}
							onKeyDown={handleKeyPress}
						/>
						<Select
							instanceId="type"
							name="type"
							classNamePrefix={'Select'}
							options={typeData?.data?.map((type) => ({
								value: type,
								label: type,
							}))}
							placeholder={'Type'}
							onChange={(value: any) =>
								setFieldValue('type', value.value)
							}
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
							onChange={(value: any) =>
								setFieldValue('rarity', value.value)
							}
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
							onChange={(value: any) =>
								setFieldValue('set', value.value)
							}
							components={{
								IndicatorSeparator: () => null,
							}}
						/>
					</FilterWrapper>
				)}
			</Formik>
		</Container>
	)
}

export default Filter
