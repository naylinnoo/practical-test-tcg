import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Item = {
	id: string
	quantity: number
	price: number
}

type CartState = {
	items: Item[]
	paid: boolean
}

const initialState: CartState = {
	items: [],
	paid: false,
}

export const cartSlice = createSlice({
	name: 'item',
	initialState,
	reducers: {
		addCard: (state, action: PayloadAction<Item>) => {
			const { id, quantity, price } = action.payload
			const item = state.items.find((item) => item.id === id)
			if (item) {
				item.quantity += quantity
			} else {
				state.items.push({ id, quantity, price })
			}
		},
		removeCard: (state, action: PayloadAction<Item>) => {
			const { id, quantity } = action.payload
			const item = state.items.find((item) => item.id === id)
			if (item) {
				item.quantity -= quantity
				if (item.quantity <= 0) {
					state.items = state.items.filter((item) => item.id !== id)
				}
			}
		},

		makePay: (state, action: PayloadAction<boolean>) => {
			state.paid = action.payload
			state.items = []
		},

		clearAll: (state) => {
			state.items = []
		},
	},
})

export const { addCard, removeCard, clearAll, makePay } = cartSlice.actions

export default cartSlice.reducer
