import style from './Box.module.scss';

interface BoxProps {
	title?: string;
	content?: React.ReactNode;
	id?: string;
}

const Box: React.FC<BoxProps> = (props) => {
	return (
		<section data-section id={props.id} className={style.container}>
			<h2 className={style.title}>{props.title}</h2>
			<div className={style.content}>{props.content}</div>
		</section>
	);
};

export default Box;
