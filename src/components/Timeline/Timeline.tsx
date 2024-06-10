import style from './Timeline.module.scss';

import { educationData as data } from '../../helpers/constants';

import Info from '../common/Info/Info';

interface TimelineProps {}

const Timeline: React.FC<TimelineProps> = () => {
	return (
		<div className={style.container}>
			<ul className={style.list}>
				{data.map((element) => {
					return (
						<li key={element.year} className={style.event}>
							<div className={`${style.year}`}>{element.year}</div>
							<div className={style.eventContent}>
								<Info text={element.text} title={element.title} />
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
export default Timeline;
