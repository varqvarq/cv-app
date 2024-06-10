import style from './Home.module.scss';

import PhotoBox from '../../components/PhotoBox/PhotoBox';
import img from '../../assets/images/svg/avatar.svg';
import Button from '../../components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
	const navigate = useNavigate();

	return (
		<div className={style.container}>
			<div className={style.wrapper}>
				<PhotoBox
					name={'Ramil Askarov'}
					title={'Front-End Developer'}
					description={
						'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque '
					}
					avatar={img}
				/>

				<Button
					buttonText={'know more'}
					onClick={() => navigate('/inner')}
					className={style.button}
				/>
			</div>
		</div>
	);
};
export default Home;
