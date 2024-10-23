import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Skills from './Skills';
import { toggleSkills } from '../../redux/features/skills/skillsSlice';
import { Store } from '@reduxjs/toolkit';

const mockStore = configureStore([]);

describe('Skills Component', () => {
	let store: Store;

	beforeEach(() => {
		store = mockStore({
			skillsSlice: {
				skills: [
					{ name: 'JavaScript', range: 80 },
					{ name: 'React', range: 70 },
				],
				skillFormIsOpen: false,
			},
		});

		store.dispatch = jest.fn();
	});

	test('test_toggle_skills_form_visibility', () => {
		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);

		const button = screen.getByText(/open edit/i);
		fireEvent.click(button);

		expect(store.dispatch).toHaveBeenCalledWith(toggleSkills(true));
	});

	test('test_render_skill_bars_correctly', () => {
		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);

		const skillBars = screen.getAllByRole('progressbar');
		expect(skillBars).toHaveLength(2);
		expect(skillBars[0]).toHaveStyle('width: 80%');
		expect(skillBars[1]).toHaveStyle('width: 70%');
	});

	test('test_handle_empty_skills_data', () => {
		store = mockStore({
			skillsSlice: {
				skills: [],
				skillFormIsOpen: false,
			},
		});

		render(
			<Provider store={store}>
				<Skills />
			</Provider>
		);

		const skillBars = screen.queryAllByRole('progressbar');
		expect(skillBars).toHaveLength(0);
	});
});
