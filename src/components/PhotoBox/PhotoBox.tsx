import style from './PhotoBox.module.scss';

interface Props {
	name: string;
	title?: string;
	description?: string;
	avatar: string;
	sidebar?: boolean;
	className?: string;
}

const PhotoBox: React.FC<Props> = (props) => {
	return (
		<div
			className={`${style.container} ${props.sidebar ? style.sidebar : ''} ${props.className}`}
		>
			<img src={props.avatar} alt='avatar' className={style.avatar} />

			<h2 className={style.name}>{props.name}</h2>

			{props.title && <h3 className={style.title}>{props.title}</h3>}

			{props.description && (
				<p className={style.description}>{props.description}</p>
			)}
		</div>
	);
};
export default PhotoBox;
