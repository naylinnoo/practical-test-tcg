const fetcher = async (url: string) => {
	try {
		const response = await fetch(
			`${process.env.NEXT_PUBLIC_API_URL}${url}`,
			{
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json',
				},
			}
		)

		return await response.json()
	} catch (error) {
		return error
	}
}

export default fetcher
