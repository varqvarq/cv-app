import style from './Experience.module.scss';

import { expertiseData as data } from '../../helpers/constants';

interface ExperienceProps {}

export const Experience: React.FC<ExperienceProps> = () => {
	return (
		<ul className={style.list}>
			{data.map((element) => {
				return (
					<li className={style.element} key={element.date}>
						<div className={style.companyInfo}>
							<h3 className={style.company}>{element.info.company}</h3>
							<span className={style.year}>{element.date}</span>
						</div>

						<div className={style.jobInfo}>
							<h3 className={style.job}>{element.info.job}</h3>
							<h3 className={style.description}>{element.info.description}</h3>
						</div>
					</li>
				);
			})}
		</ul>
	);
};

export default Experience;
