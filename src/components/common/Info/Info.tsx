import style from './Info.module.scss';

interface InfoProps {
	title?: string;
	text: string;
	className?: string;
}

const Info: React.FC<InfoProps> = (props) => {
	return (
		<article className={`${style.container} ${props.className}`}>
			<h4 className={style.title}>{props.title}</h4>
			<p className={style.text}>{props.text}</p>
		</article>
	);
};
export default Info;
