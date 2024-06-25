import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { ISkillsData } from '../../../helpers/types';

export interface SkillsState {
	skills: ISkillsData[];
	status: 'idle' | 'loading' | 'failed';
	error: string;
	skillFormIsOpen: boolean;
}

const initialState: SkillsState = {
	skills: [],
	status: 'idle',
	error: '',
	skillFormIsOpen: false,
};

export const fetchSkillsData = createAsyncThunk<ISkillsData[], void>(
	'skills/fetchSkillsData',
	async (_, thunkApi) => {
		const response = await fetch('api/skills');

		if (!response.ok) {
			return thunkApi.rejectWithValue(
				'Something went wrong; please review your server connection!'
			);
		}
		const data = await response.json();

		return data as ISkillsData[];
	}
);
export const addSkill = createAsyncThunk<ISkillsData, ISkillsData>(
	'skills/addSkill',
	async (newSkill, thunkApi) => {
		try {
			const response = await fetch('api/skills', {
				method: 'POST',
				body: JSON.stringify(newSkill),
			});

			if (!response.ok) {
				return thunkApi.rejectWithValue(
					'Something went wrong; please review your server connection!'
				);
			}
			const data = await response.json();
			thunkApi.dispatch(fetchSkillsData());

			return data;
		} catch (e) {
			throw thunkApi.rejectWithValue('server error');
		}
	}
);

export const skillsSlice = createSlice({
	name: 'Skills',
	initialState,
	reducers: {
		toggleSkills: (state, action) => {
			state.skillFormIsOpen = action.payload;
		},
	},

	extraReducers: (builder) => {
		builder
			.addCase(fetchSkillsData.pending, (state) => {
				state.status = 'loading';
			})
			.addCase(fetchSkillsData.fulfilled, (state, action) => {
				state.status = 'idle';
				state.skills = action.payload;
			})
			.addCase(fetchSkillsData.rejected, (state, action) => {
				state.status = 'failed';
				state.error = action.payload as string;
			})
			.addCase(addSkill.fulfilled, (state, action) => {
				state.skills.push(action.payload);
			});
	},
});

export const { toggleSkills } = skillsSlice.actions;

export const selectSkillsData = (state: RootState) => state.skillsSlice;

export default skillsSlice.reducer;
