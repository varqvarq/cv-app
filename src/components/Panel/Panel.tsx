import { Link } from 'react-router-dom';

import style from './Panel.module.scss';
import img from '../../assets/images/svg/avatar.svg';
import icons from '../../helpers/faIcons';

import Button from '../common/Button/Button';
import Navigation from '../Navigation/Navigation';
import PhotoBox from '../PhotoBox/PhotoBox';

interface PanelProps {
	state: boolean;
	setState: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Panel: React.FC<PanelProps> = ({
	state: isOpen,
	setState: setIsOpen,
}) => {
	return (
		<div className={`${style.panelWrapper} ${isOpen ? style.active : ''}`}>
			<aside className={`${style.panel} `}>
				<div>
					<div className={style.photoboxContainer}>
						<PhotoBox
							name={'Ramil Askarov'}
							avatar={'avatar.svg'}
							sidebar
							className={style.photobox}
						/>
					</div>

					<Navigation />
				</div>

				<Link to='/' className={style.link}>
					<Button
						icon={icons.faChevronLeft}
						buttonText='go back'
						className={` ${style.button} ${style.backButton}`}
					/>
				</Link>
			</aside>
			<span className={style.toggle} onClick={() => setIsOpen(!isOpen)} />
		</div>
	);
};

export default Panel;
