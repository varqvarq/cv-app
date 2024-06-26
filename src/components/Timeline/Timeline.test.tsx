import { render } from '@testing-library/react';
import { useAppSelector } from '../../redux/app/hooks';
import Timeline from './Timeline';

// Mock the useAppSelector hook
jest.mock('../../redux/app/hooks');
const mockedUseAppSelector = useAppSelector as jest.Mock;

describe('Timeline Component', () => {
	test('test_render_loading_icon', () => {
		mockedUseAppSelector.mockReturnValue({
			education: [],
			status: 'loading',
			error: null,
		});

		const { getByRole } = render(<Timeline />);
		const loadingIcon = getByRole('img', { hidden: true });

		expect(loadingIcon).toHaveClass('fa-rotate');
	});

	test('test_display_error_message', () => {
		mockedUseAppSelector.mockReturnValue({
			education: [],
			status: 'failed',
			error: 'Failed to fetch data',
		});

		const { getByText } = render(<Timeline />);
		const errorMessage = getByText('Failed to fetch data');

		expect(errorMessage).toBeInTheDocument();
	});

	test('test_render_education_data', () => {
		const mockData = [
			{
				date: '2020',
				title: 'Bachelor of Science',
				description: 'Graduated with honors',
			},
			{
				date: '2022',
				title: 'Master of Science',
				description: 'Completed with distinction',
			},
		];

		mockedUseAppSelector.mockReturnValue({
			education: mockData,
			status: 'idle',
			error: null,
		});

		const { getByText } = render(<Timeline />);

		mockData.forEach((item) => {
			expect(getByText(item.date)).toBeInTheDocument();
			expect(getByText(item.title)).toBeInTheDocument();
			expect(getByText(item.description)).toBeInTheDocument();
		});
	});
});
