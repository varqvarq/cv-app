import { IPortfolioData } from '../../../../helpers/types';
import style from './PortfolioInfo.module.scss';

interface PortfolioInfoProps {
	item: IPortfolioData;
	className: string;
}

export const PortfolioInfo: React.FC<PortfolioInfoProps> = (props) => {
	return (
		<div className={`${style.info} ${props.className}`}>
			<h3 className={style.title}>{props.item.title}</h3>
			<p className={style.description}>{props.item.description}</p>
			<a className={style.link} href={props.item.site}>
				Some site
			</a>
		</div>
	);
};

export default PortfolioInfo;
