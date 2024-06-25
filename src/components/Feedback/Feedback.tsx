import style from './Feedback.module.scss';

import { feedbackData as data } from '../../helpers/constants';

import Info from '../common/Info/Info';

interface FeedbackProps {}

export const Feedback: React.FC<FeedbackProps> = () => {
	return (
		<ul className={style.container}>
			{data.map((item) => (
				<li className={style.item} key={item.id}>
					<Info text={item.feedback} className={style.feedbackText} />

					<div className={style.reporterInfo}>
						<img
							src={`/assets/images/${item.reporter.photoUrl}`}
							alt='reporter_img'
							className={style.reporterImg}
						/>

						<p className={style.reporterName}>
							{`${item.reporter.name}, `}
							<a
								href={`${item.reporter.citeUrl}`}
								className={style.reporterLink}
							>
								{item.reporter.citeUrl}
							</a>
						</p>
					</div>
				</li>
			))}
		</ul>
	);
};

export default Feedback;
