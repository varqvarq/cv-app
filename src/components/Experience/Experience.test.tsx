import { render, screen } from '@testing-library/react';
import { Experience } from './Experience';
import { expertiseData as data } from '../../helpers/constants';

describe('Experience Component', () => {
	test('renders the list of experiences', () => {
		render(<Experience />);

		// Check if the list is rendered
		const listElement = screen.getByRole('list');
		expect(listElement).toBeInTheDocument();

		// Check if all list items are rendered
		const listItems = screen.getAllByRole('listitem');
		expect(listItems).toHaveLength(data.length);
	});

	test('renders company names correctly', () => {
		render(<Experience />);

		data.forEach((element) => {
			const companyElement = screen.getByText(element.info.company);
			expect(companyElement).toBeInTheDocument();
		});
	});

	test('renders job titles correctly', () => {
		render(<Experience />);

		data.forEach((element) => {
			const jobElement = screen.getByText(element.info.job);
			expect(jobElement).toBeInTheDocument();
		});
	});

	test('renders descriptions correctly', () => {
		render(<Experience />);

		data.forEach((element) => {
			const descriptionElement = screen.getByText(element.info.description);
			expect(descriptionElement).toBeInTheDocument();
		});
	});

	test('renders dates correctly', () => {
		render(<Experience />);

		data.forEach((element) => {
			const dateElement = screen.getByText(element.date);
			expect(dateElement).toBeInTheDocument();
		});
	});
});
