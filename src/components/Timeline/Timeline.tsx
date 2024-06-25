import style from './Timeline.module.scss';

import Info from '../common/Info/Info';

import icons from '../../helpers/faIcons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from '../../redux/app/hooks';
import { selectEducationData } from '../../redux/features/education/educationSlice';

const Timeline: React.FC = () => {
	const {
		education: data,
		status,
		error,
	} = useAppSelector(selectEducationData);

	return (
		<div className={style.container}>
			{status === 'loading' && (
				<FontAwesomeIcon
					icon={icons.faRotate}
					size='2xl'
					className={style.loading}
				/>
			)}

			{status === 'failed' && (
				<h2 className={style.error}>
					{}
					{error}
				</h2>
			)}

			{status === 'idle' && (
				<ul className={style.list}>
					{data.map((element) => {
						return (
							<li key={element.date} className={style.event}>
								<div className={`${style.year}`}>{element.date}</div>
								<div className={style.eventContent}>
									<Info text={element.description} title={element.title} />
								</div>
							</li>
						);
					})}
				</ul>
			)}
		</div>
	);
};
export default Timeline;
