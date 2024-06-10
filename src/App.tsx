import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Inner from './pages/Inner/Inner';

function App() {
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
