import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';
import { useAppDispatch } from './redux/app/hooks';
import { useEffect } from 'react';
import { fetchEducationData } from './redux/features/education/educationSlice';
import { fetchSkillsData } from './redux/features/skills/skillsSlice';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchEducationData());
		dispatch(fetchSkillsData());
	}, [dispatch]);

	return (
		<div className='App'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/inner' element={<Inner />} />
			</Routes>
		</div>
	);
}

export default App;
