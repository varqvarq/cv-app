import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { IEducationData } from '../../../helpers/types';

export interface EducationState {
	education: IEducationData[];
	status: 'idle' | 'loading' | 'failed';
	error: string;
}

const initialState: EducationState = {
	education: [],
	status: 'idle',
	error: '',
};

export const fetchEducationData = createAsyncThunk<IEducationData[], void>(
	'education/fetchEducationData',
	async (_, thunkApi) => {
		const response = await fetch('api/education');

		if (!response.ok) {
			return thunkApi.rejectWithValue(
				'Something went wrong; please review your server connection!'
			);
		}
		const data = await response.json();

		return data as IEducationData[];
	}
);

export const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEducationData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchEducationData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.education = action.payload;
			})
			.addCase(fetchEducationData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			});
	},
});

export const selectEducationData = (state: RootState) => state.educationSlice;

export default educationSlice.reducer;
